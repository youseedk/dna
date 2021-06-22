<h3 align="center">YouSee DNA </h3>
<p align="center">
  A framework for building YouSee branded websites and applications.
  <br>
  <a href="https://dna.yousee.dk"><strong>YouSee DNA documentation</strong></a> · <a href="https://github.com/youseedk/dna"><strong>YouSee DNA on GitHub</strong></a>
</p>

[![Build Status](https://travis-ci.com/youseedk/dna.svg?branch=master)](https://travis-ci.com/youseedk/dna)
[![npm version](https://img.shields.io/npm/v/@youseedk/dna.svg)](https://www.npmjs.com/package/@youseedk/dna)
[![Last Commit](https://img.shields.io/github/last-commit/youseedk/dna/master.svg)](https://github.com/youseedk/dna)

## Table of contents

- [Install](#install)
- [Contents](#contents)
- [Browser Support](#browser-support)
- [Documentation](#documentation)
- [Local Documentation](#local-documentation)

## Install

- Install with [npm](https://www.npmjs.com/): `npm i @youseedk/dna`
- Install with [yarn](https://yarnpkg.com/): `yarn add @youseedk/dna`

## Contents
In the downloaded package (found in `node_modules/@youseedk/`) you'll find the following directories:

```plaintext
dna/
├── css/
│   ├── base
│   ├── elements
│   ├── icons
│   ├── layout
│   ├── settings
├── scss/
├── svg/
├── ys-bundle.css
└── ys-bundle.min.css
```

The package is designed for two use cases:
1. "As is" — you use `ys-bundle.min.css` which contains all YouSee elements and layout settings.
2. "Custom" - you pick and mix what elements, svg files, font files etc. are needed and include them in a setup of your own choosing.

If you choose option 2, "Custom", please be aware that it is required that you include `ys-base.css` before including any other elements.

For further documentation, please visit the [documentation site](https://dna.yousee.dk)

### CDN
It is also possible to load the bundled css files from a CDN:
`<link rel="stylesheet" type="text/css" href="https://unpkg.com/@youseedk/dna/ys-bundle.min.css" />` will always load the latest version.

If a specific version is needed, insert the version number into the URL, ie.:
`<link rel="stylesheet" type="text/css" href="https://unpkg.com/@youseedk/dna@1.0.0/ys-bundle.min.css" />` will load version 1.0.0.

## Browser Support
Please visit the [documentation site](https://dna.yousee.dk/docs/code-guidelines/browser-support.html)

## Documentation
YouSee DNA's documentation is built with [Fractal](https://fractal.build/), deployed on [GitHub Pages](https://pages.github.com/) using [Travis CI](https://travis-ci.com).

## Local documentation
Clone the repo:
```bash
git clone https://github.com/yousee.dk/dna.git
```

After cloning the repository run the following command to install node modules
```bash
$ npm ci
```

Running the project
```bash
$ npm start
```

That will run the project in development mode and will watch the files for changes. The command will also
print the hostname and port for where the server is runnning.
