with open('style.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f'Total lines in style.css: {len(lines)}')
print('Last 10 lines of style.css:')
for l in lines[-10:]:
    print(l, end='')

