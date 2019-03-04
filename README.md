# DNA [![Build Status](https://travis-ci.org/youseedk/dna.svg?branch=master)](https://travis-ci.org/youseedk/dna)

## Getting started

After cloning the repository run the following command to install node modules

```bash
$ npm ci
```

# Running the project
```bash
$ gulp
```

That will run the project in development mode and will watch the files for changes. The command will also
print the hostname and port for where the server is runnning.

## Creating a dist-folder for upload

To create a folder with the entire component library simply run
```bash
$ gulp fractal:build
```
