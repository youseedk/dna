---
title: Installation & Usage
url: /docs/code-guidelines/installation-and-usage
category: code-guidelines
primaryKeywords: code npm install gulp css framework cdn
secondaryKeywords: github
---

## Install
- Install with [npm](https://www.npmjs.com/): `npm i @youseedk/dna`
- Install with [yarn](https://yarnpkg.com/): `yarn add @youseedk/dna`

## Usage
The package is designed for two use cases:

1. "As is" — you use ys-bundle.min.css which contains all YouSee elements and layout settings. That file is available both in the NPM package and on the CDN.
2. "Custom" - you only import the necessary files in your setup. Please note that you need to import ys-base.css, before including any other files from DNA.

### Requirements
- Due to accessibility reasons, all font sizing is set using the `rem` unit — however, this requires that the font size on the `html` element is set to `16px` (default in all modern browsers).

### CDN
It is also possible to load the bundled css files from a CDN:
```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@youseedk/dna/ys-bundle.min.css" />
```
will always load the latest version.

If a specific version is needed, insert the version number into the URL, ie.:
```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@youseedk/dna@1.0.0/ys-bundle.min.css" />
```
will load version 1.0.0.

## Contents of package
The package is organized in the following structure:
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

The bundle files  (`ys-bundle.css` or `ys-bundle.min.css`) is the only file you need to import if you want to add all elements from YouSee DNA. This is the quick and easy option, but it might not be preferable in some use cases. In those use cases the subfolders contain what's needed for building a custom stylesheet that only contains the needed elements.

### css
The `css` folder contains minified css-files that can be imported into any build step.

`css/base` contains the bare minimums, and the `ys-base.css` file is required for all use cases.

`css/elements` containes ui elements, such as buttons, input fields, typography, cards etc.

`css/icons` is needed if you choose to use the icon sprite or any of the SVG's included.

`css/layout` is the grid.

`css/settings` includes CSS Custom Properties (also known as CSS variables) for colors, breakpoints etc.

### scss
The `scss` folder contains scss-variables for colors, breakpoints etc.

### svg
`svg` contains all icons, both those used in the UI and the YouSee icon set, as seperate files and as two SVG sprites.



