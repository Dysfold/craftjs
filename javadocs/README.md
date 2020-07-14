# Javadocs

Small program to extract JavaDoc-data to json. To be used in tandem with the Nashorn-script to generate TypeScript -declaration files from Java types.

## Usage

0. Run `npm install` to install dependencies and create `docs` and `json` directories.
1. Execute `fetch.sh`. This will fetch all links in the `links.txt` -file and download their html for easier usage for the next step.
2. Execute `npm start` to generate usable JSON data from the javadocs.
3. Done. Refer to [here](../docs/Typescript.md) for how to actually generate the declarations.