---
title: Installation & Usage
---

## Install
- Install with [npm](https://www.npmjs.com/): `npm i @youseedk/dna`
- Install with [yarn](https://yarnpkg.com/): `yarn add @youseedk/dna`

## Usage
The package is designed for two use cases:

1. "As is" — you use ys-bundle.min.css which contains all YouSee elements and layout settings. That file is available both in the NPM package and on the CDN.
2. "Custom" - you pick and mix what elements, svg files, font files etc. are needed and include them in a setup of your own choosing.

If you choose option 2, "Custom", please be aware that it is required that you include ys-base.css before including any other elements.

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
├── fonts/
├── scss/
├── svg/
├── ys-bundle.css
└── ys-bundle.min.css
```

The files in the root (`ys-bundle.css` and `ys-bundle.min.css`) is all you need if you don't want include all of the elements in YouSee DNA. This is the quick and easy option, but it might not be preferable in some use cases. In those use cases the subfolders contain what's needed for building a custom stylesheet that only contains the needed elements.

### css
The `css` folder contains minified css-files that can be imported into any build step.

`css/base` contains the bare minimums, and the `ys-base.css` file is required for all use cases.

`css/elements` containes ui elements, such as buttons, input fields, typography, cards etc.

`css/icons` is needed if you choose to use the icon sprite or any of the SVG's included.

`css/layout` is the grid.

`css/settings` includes CSS Custom Properties (also known as CSS variables) for colors, breakpoints etc.

### fonts
`fonts` includes the LTF Etica font used by YouSee — it's provided in four weights and two different file types (woff and woff2).

### scss
The `scss` folder contains scss-variables for colors, breakpoints etc.

### svg
`svg` contains all icons, both those used in the UI and the YouSee icon set, as seperate files and as two SVG sprites.



