<h3 align="center">YouSee DNA [![Build Status](https://travis-ci.org/youseedk/dna.svg?branch=master)](https://travis-ci.org/youseedk/dna)</h3>
<p align="center">
  A framework for building YouSee branded websites and applications.
  <br>
  <a href="https://dna.yousee.dk"><strong>See YouSee DNA documentation</strong></a>
</p>

## Table of contents

- [Install with NPM](#install-with-npm)
- [Contents](#contents)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Local Documentation](#local-documentation)
- [Contributing](#contributing)

## Install with NPM
Add YouSee DNA to your project:
```bash
npm install @youseedk/dna
```

## Contents
In the downloaded package (found in `node_modules/@youseedk/`) you'll find the following directories and files:

```text
dna/
├── css/
│   ├── base
│   │   └── ys-base.css
│   ├── elements
│   │   ├── ys-bow.css
│   │   ├── ys-button.css
│   │   ├── ys-card.css
│   │   ├── ys-checkbox.css
│   │   ├── ys-flow-steps.css
│   │   ├── ys-input-field.css
│   │   ├── ys-link.css
│   │   ├── ys-notification.css
│   │   ├── ys-progress.css
│   │   ├── ys-radio-button.css
│   │   ├── ys-rich-text.css
│   │   ├── ys-select.css
│   │   ├── ys-slider.css
│   │   ├── ys-splash.css
│   │   ├── ys-tabs.css
│   │   ├── ys-tag.css
│   │   ├── ys-textarea.css
│   │   ├── ys-toggle-switch.css
│   │   ├── ys-tooltip.css
│   │   └── ys-typography.css
│   ├── icons
│   │   └── ys-icons.css
│   ├── layout
│   │   └── ys-grid.css
├── fonts/
│   ├── ltf_etica_bold-webfont.woff
│   ├── ltf_etica_bold-webfont.woff2
│   ├── ltf_etica_light-webfont.woff
│   ├── ltf_etica_light-webfont.woff2
│   ├── ltf_etica_reg-webfont.woff
│   ├── ltf_etica_reg-webfont.woff2
│   ├── ltf_etica_semibold-webfont.woff
│   └── ltf_etica_semibold-webfont.woff2
├── scss/
│   ├── _ys-colors.scss
│   └── _ys-settings.scss
├── svg/
│   ├── icon-set
│   │   ├── 10s-back.svg
│   │   ├── ...
│   │   └── yousee-more.svg
│   ├── ui-icons
│   │   ├── arrow-down.svg
│   │   ├── ...
│   │   └── plus.svg
│   ├── icon-set-sprite.svg
│   ├── ui-icons-sprite.svg
├── ys-bundle.css
└── ys-bundle.min.css
```

The package is designed for two use cases:
1. "As is" — you use `ys-bundle.min.css` which contains all YouSee elements and layout settings.
2. "Custom" - you pick and mix what elements, svg files, font files etc. are needed and include them in a setup of your own choosing.

If you choose option 2, "Custom", please be aware that it is required that you include `ys-base.css` before including any other elements.

For further documentation, please visit the [documentation site](https://dna.yousee.dk)

## Bugs and feature requests

## Documentation
YouSee DNA's documentation is built with [Fractal](https://fractal.build/).

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
$ gulp
```

That will run the project in development mode and will watch the files for changes. The command will also
print the hostname and port for where the server is runnning.

## Contributing
