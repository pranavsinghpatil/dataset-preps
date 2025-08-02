# 🚀 Gemma3n-tune: Dataset Preparation for Fine-Tuning 🚀

This directory contains a collection of scripts and data for preparing a specialized dataset for fine-tuning the Gemma model. The goal of this project is to create a high-quality dataset of images and text that can be used to train a model for a specific task.

## 🛠️ Scripts and Functionality

The following scripts are included in this directory:

*   **`rename.py`**: This script renames all images in the `images` directory to a consistent format (e.g., `img1.jpg`, `img2.jpg`, etc.).
*   **`formCSV.py`**: This script parses a `.jsonl` file and a `.csv` file, extracts relevant data, and merges them into a single `finedata.csv` file.
*   **`formXLSX.py`**: This script is similar to `formCSV.py`, but it also embeds the images from the `images` directory into the resulting `finedata.xlsx` file.
*   **`remove_audio_column.py`**: This script removes the "Audio" column from the `finedata.xlsx` file and saves the result as `kfine.xlsx`.

## 🚀 Get Started

To use these scripts, you will need to have Python 3 installed on your system. You will also need to install the following libraries:

```bash
pip install openpyxl Pillow
```

Once you have installed the necessary libraries, you can run the scripts from the command line. For example, to run the `rename.py` script, you would use the following command:

```bash
python rename.py
```

## 🤝 Contributing

Contributions to this project are welcome. If you have any suggestions for improving the scripts or adding new functionality, please feel free to open an issue or submit a pull request.
