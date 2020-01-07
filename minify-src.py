import os, urllib.parse, urllib.request

# APIs
APIS = {
    'ml':'https://html-minifier.com/raw',
    'js': 'https://javascript-minifier.com/raw',
    'ss': 'https://cssminifier.com/raw'
}

for (current_path, _, files) in os.walk('./src'):
    for filename in files:
        print(f'minimizing {filename}...')
        fullpath = f'{current_path}/{filename}'

        data = open(fullpath, mode='rb').read()
        data = urllib.parse.urlencode({'input': data}).encode('ascii')
        req = urllib.request.Request(url=APIS[filename[-2:]], data=data, method='POST')

        with urllib.request.urlopen(req) as res:
            new_data = res.read().decode('utf-8')
            publicpath = fullpath.replace('src','public', 1)

            with open(publicpath, 'w') as f: f.write(new_data)
