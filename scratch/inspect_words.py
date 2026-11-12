import re

for fn in ['style.css', 'index.html', 'app.js']:
    print(f"\n=================== {fn} ===================")
    with open(fn, 'r', encoding='utf-8') as f:
        c = f.read()
    
    matches = list(re.finditer(r'(bespoke|atelier)', c, re.I))
    for m in matches:
        start = max(0, m.start() - 35)
        end = min(len(c), m.end() + 35)
        snippet = c[start:end].replace('\n', ' ')
        print(f"[{m.group(0)}] ... {snippet} ...")
