import csv
import json

def parse_jsonl(jsonl_path):
    rows = []
    with open(jsonl_path, 'r', encoding='utf-8') as f:
        for line in f:
            obj = json.loads(line)
            filename = obj.get('filename', '')
            messages = obj.get('messages', [])
            user_msg = ''
            ai_msg = ''
            for m in messages:
                if m.get('role') == 'user':
                    user_msg = m.get('content', '')
                    if isinstance(user_msg, dict):
                        user_msg = str(user_msg)
                    user_msg = user_msg.replace('\n', ' ').replace('\r', ' ')
                elif m.get('role') == 'assistant':
                    ai_msg = m.get('content', '')
                    if isinstance(ai_msg, dict):
                        ai_msg = str(ai_msg)
                    ai_msg = ai_msg.replace('\n', ' ').replace('\r', ' ')
            text = f"[User: {user_msg} , AI: {ai_msg}]"
            rows.append([filename, '', text])
    return rows

def parse_csv(csv_path):
    rows = []
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        next(reader, None)  # Skip header if present
        for row in reader:
            if len(row) == 3:
                # Remove newlines from text column
                row[2] = row[2].replace('\n', ' ').replace('\r', ' ')
                rows.append(row)
            elif len(row) == 2:
                row[1] = row[1].replace('\n', ' ').replace('\r', ' ')
                rows.append([row[0], '', row[1]])
            elif len(row) == 1:
                rows.append([row[0], '', ''])
    return rows

def write_csv(csv_path, rows):
    with open(csv_path, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Image', 'Audio', 'Text'])
        for row in rows:
            writer.writerow(row)

if __name__ == '__main__':
    csv_rows = parse_csv('d:\\repofixs\\port\\datatillnow.csv')
    jsonl_rows = parse_jsonl('d:\\repofixs\\port\\dataset.jsonl')
    all_rows = csv_rows + jsonl_rows
    write_csv('d:\\repofixs\\port\\finedata.csv', all_rows)
    print('Merged data written to finedata.csv')