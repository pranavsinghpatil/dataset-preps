import json
import os

def fix_jsonl(input_path, output_path):
    with open(input_path, 'r') as infile, open(output_path, 'w') as outfile:
        for line in infile:
            try:
                data = json.loads(line)
                if 'messages' in data and isinstance(data['messages'], list):
                    for message in data['messages']:
                        if 'content' in message and isinstance(message['content'], dict):
                            message['content'] = json.dumps(message['content'])
                outfile.write(json.dumps(data) + '\n')
            except json.JSONDecodeError:
                # Handle cases where a line is not valid JSON, if any
                outfile.write(line)

input_file = os.path.join('data', 'dataset.jsonl')
output_file = os.path.join('data', 'dataset_corrected.jsonl')
fix_jsonl(input_file, output_file)

os.replace(output_file, input_file)
