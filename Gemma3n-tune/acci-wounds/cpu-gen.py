import os
import time
import csv
from tqdm import tqdm
from PIL import Image
import ollama
import re
import json
from concurrent.futures import ThreadPoolExecutor, as_completed

# Folder containing images
image_folder = "./images"
csv_file = "datatillnow.csv"

# Prompt Template
prompt_template = """
You are an AI emergency assistant.

Given the following injury image:
1. Generate a realistic, natural query a user might ask after seeing or having this injury. The tone can reflect pain, urgency, confusion, or concern.
2. Based on the image and query, write a comprehensive, practical, and calm AI response with these sections:
   - Appearance of the injury
   - Injury severity (Mild/Moderate/Severe)
   - First-aid Instructions (step-by-step)
   - When to seek medical attention
Make sure the advice is medically accurate but simple for a layperson.
Respond in this JSON format:

{{
  "user-query": "...",
  "assistant-response": "...",
  "injury-severity": "Mild/Moderate/Severe"
}}
"""

# Prepare CSV file with header if not exists
if not os.path.exists(csv_file):
    with open(csv_file, "w", newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(["Image", "Audio", "Text"])

# Read already processed images to skip them
processed_images = set()
try:
    with open(csv_file, "r", encoding='utf-8') as f:
        reader = csv.reader(f)
        next(reader, None)  # skip header
        for row in reader:
            if row:
                processed_images.add(row[0])
except FileNotFoundError:
    # If the file doesn't exist, it means no images have been processed yet.
    pass
except UnicodeDecodeError:
    with open(csv_file, "r", encoding='latin-1') as f:
        reader = csv.reader(f)
        next(reader, None)  # skip header
        for row in reader:
            if row:
                processed_images.add(row[0])

def extract_number(filename):
    match = re.search(r'(\d+)', filename)
    return int(match.group(1)) if match else float('inf')

image_list = [f for f in os.listdir(image_folder) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]
image_list.sort(key=extract_number)
err = []

def process_image(img_name):
    image_path = os.path.join(image_folder, img_name)
    try:
        with open(image_path, "rb") as img_file:
            image_bytes = img_file.read()

        response = ollama.chat(
            model='llava',
            messages=[
                {
                    "role": "user",
                    "content": prompt_template,
                    "images": [image_bytes]
                }
            ]
        )

        json_output = response['message']['content'].strip()
        if not json_output:
            print(f"Empty response for {img_name}, skipping.")
            return (img_name, None, None, "Empty response")

        # Remove code block markers if present
        if json_output.startswith("```"):
            json_output = json_output.strip().lstrip("`")
            lines = json_output.splitlines()
            if lines and lines[0].strip().lower() == "json":
                lines = lines[1:]
            if lines and lines[-1].strip() == "```":
                lines = lines[:-1]
            json_output = "\n".join(lines).strip()

        parsed = json.loads(json_output)
        text = f"User: {parsed['user-query']}\nAI: {parsed['assistant-response']}"
        audio = ""  # Optional, fill if you have audio

        print(f"\n ✨ Processed {img_name} successfully.")
        return (img_name, audio, text, None)
    except Exception as e:
        print(f"Error processing {img_name}: {e}")
        return (img_name, None, None, str(e))

# Use all available CPU cores
max_workers = os.cpu_count() or 4

# Filter out already processed images
images_to_process = [img for img in image_list if img not in processed_images]

if not images_to_process:
    print("✅ All images have already been processed.")
else:
    print(f"Found {len(images_to_process)} new images to process.")
    with ThreadPoolExecutor(max_workers=max_workers) as executor, open(csv_file, "a", newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        futures = {executor.submit(process_image, img_name): img_name for img_name in images_to_process}
        
        for future in tqdm(as_completed(futures), total=len(futures)):
            result = future.result()
            if result is None:
                # This should not happen if we filter before, but as a safeguard.
                continue
            
            img_name, audio, text, error = result
            if error:
                err.append((img_name, error))
                continue
            if img_name and text:
                writer.writerow([img_name, audio, text])
                processed_images.add(img_name) # Add to set to avoid re-processing in the same run

print("✅ All done. Results saved in datatillnow.csv")
if err:
    print(f"Some errors occurred: {err}")