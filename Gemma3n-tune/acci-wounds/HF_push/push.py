from datasets import load_dataset, Image
from huggingface_hub import login
import os
from dotenv import load_dotenv

load_dotenv()

# --- 1. Login to Hugging Face (if not already logged in) ---
login(token=os.getenv("HF_TOKEN"))

# --- 2. Define Local Path and Hub Repo ID ---
local_root_folder = "./"
hub_repo_id = "pranavsinghpatil/accidents-wounds-finetune" 

# --- 3. Load Your Local Dataset with image handling ---
# When loading a local dataset, you point to the file that describes it.
# The 'Image()' feature automatically handles loading images based on paths.
# The key here is that the paths in your JSONL (`"images/image1.jpg"`) are relative
# to where `dataset.jsonl` is located within the `local_root_folder`.
dataset = load_dataset(
    "json",
    data_files=os.path.join(local_root_folder, "data", "dataset.jsonl"),
    split="train" # Assuming your README configures a 'train' split
)

# Convert the 'image_path' string column to an actual 'Image' feature
# The `Image()` feature will resolve paths relative to the dataset's root for `push_to_hub`.
# Since your JSONL image paths like "images/image1.jpg" are relative to the `data` folder,
# and `data` folder is under `local_root_folder`, it works seamlessly.
dataset = dataset.cast_column("image_path", Image())

# Rename the column for clarity, if you wish
dataset = dataset.rename_column("image_path", "image")

# --- 4. Push to Hugging Face Hub ---
# This command will:
#   a. Create the `your-new-multimodal-dataset` repository on the Hub (if it doesn't exist).
#   b. Upload all files from `local_root_folder` (including `README.md`, `data/`, `data/images/`).
#   c. Create the `data/` and `data/images/` folders implicitly by uploading files into them.
dataset.push_to_hub(hub_repo_id)

print(f"Dataset uploaded! Check it out at: https://huggingface.co/datasets/{hub_repo_id}")

import json

jsonl_file_path = os.path.join("data", "dataset.jsonl")

try:
    with open(jsonl_file_path, 'r', encoding='utf-8') as f:
        for i, line in enumerate(f):
            try:
                data = json.loads(line)
                
                # Check the main 'messages' list
                if 'messages' in data and isinstance(data['messages'], list):
                    for j, message in enumerate(data['messages']):
                        if 'content' in message:
                            # This is the critical check
                            if not isinstance(message['content'], str):
                                print(f"Error found in row {i+1}, message {j+1}:")
                                print(f"  Expected 'content' to be a string, but found type: {type(message['content'])}")
                                print(f"  The problematic value is: {message['content']}")
                                # Exit after the first error to make it easy to find
                                exit()
                
            except json.JSONDecodeError as e:
                print(f"JSON Decode Error on row {i+1}: {e}")
                print(f"  Problematic line: {line.strip()}")
                exit()
                
except FileNotFoundError:
    print(f"Error: The file at {jsonl_file_path} was not found.")

print("All 'content' fields are valid strings! The issue might be something else.")