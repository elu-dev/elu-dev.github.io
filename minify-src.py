import os, urllib.parse, urllib.request, subprocess as cmd

# APIs
APIS = {
    'ml':'https://html-minifier.com/raw',
    'js': 'https://javascript-minifier.com/raw',
    'ss': 'https://cssminifier.com/raw'
}

try: os.mkdir('elu-dev.github.io')
except: pass

for (current_path, _, files) in os.walk('./src'):
    if 'assets' in current_path: continue
    for filename in files:
        fullpath = f'{current_path}/{filename}'
        print(f'minimizing {fullpath}...')

        data = open(fullpath, mode='r').read().encode('utf-8')
        data = urllib.parse.urlencode({'input': data}).encode('utf-8')
        req = urllib.request.Request(url=APIS[filename[-2:]], data=data, method='POST')

        with urllib.request.urlopen(req) as res:
            new_data = res.read().decode('utf-8')
            if filename[-2:] == 'ml': new_data = new_data.replace('\n','')
            publicpath = fullpath.replace('src/','elu-dev.github.io/', 1)
            try: os.makedirs(current_path.replace('src/','elu-dev.github.io/', 1))
            except: pass
            with open(publicpath, 'w') as f: f.write(new_data)