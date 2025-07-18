import os

def rename_images(folder_path, prefix="img"):
    images = [f for f in os.listdir(folder_path) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]
    images.sort()  # Ensure consistent ordering
    for i, filename in enumerate(images, 1):
        ext = os.path.splitext(filename)[1]
        new_name = f"{prefix}{i}{ext}"
        src = os.path.join(folder_path, filename)
        dst = os.path.join(folder_path, new_name)
        os.rename(src, dst)
        print(f"Renamed {filename} to {new_name}")

# Usage
rename_images("./images")  # Folder where your images are stored
