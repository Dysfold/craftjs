#!/usr/bin/env python3

import json
import sys

# First argument: the version string
version = sys.argv[1]

def update_package_json(file):
    with open(file, 'r') as f:
        manifest = json.load(f)
    manifest['version'] = version
    with open(file, 'w') as f:
        json.dump(manifest, f, indent=2)
        f.write('\n')

def update_plugin_yml(file):
    with open(file, 'r') as f:
        text = f.read()
    index = text.find('version: ')
    text = text[0:index] + 'version: ' + version
    with open(file, 'w') as f:
        f.write(text)

# All package.json files
update_package_json('core/package.json')
update_package_json('core/package.types.json')

# Bukkit plugin.yml
update_plugin_yml('java/src/main/resources/plugin.yml')

# For now, don't touch pom.xml (it is not as important as previous)