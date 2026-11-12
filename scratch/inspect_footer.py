with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'footer' in l.lower() and ('link' in l.lower() or '<ul' in l.lower() or '<nav' in l.lower() or '<footer' in l.lower()):
        print(f'{i+1}: {l.strip()[:100]}')

