'use strict';

const fractal = require('@frctl/fractal').create();
const projectPackage = require('../package.json');
const instance = fractal.docs.engine();

const helpers = require('handlebars-helpers');
helpers({
    handlebars: instance.handlebars
});

fractal.set('project.title', 'YouSee DNA'); // title for the project
fractal.set('project.version', projectPackage.version);
fractal.set('project.author', 'YouSee Digital Warehouse');

fractal.web.set('builder.dest', 'dist-site'); // destination for the static export
fractal.web.set('static.path', 'public');

fractal.docs.set('path', 'src/docs'); // location of the documentation directory.
fractal.docs.set('label', 'Guidelines'); // default is 'Documentation'

fractal.components.set('path', 'src/elements'); // location of the component directory.
fractal.components.set('default.preview', '@element-preview');
fractal.components.set('default.status', 'wip');
fractal.components.set('label', 'Elements'); // default is 'Components'


/* THEMING */
// create a new instance with custom config options
const dnaTheme = require('@frctl/mandelbrot')({
    skin: "black",
    // any other theme configuration values here
    "nav": ["docs"],
    "panels": ["html", "notes"],
    "styles": [
        "default",
        "/assets/theme/css/styles.css",
        "/assets/css/ys-bundle.min.css",
    ],
    "scripts": [
        "default",
        "/assets/theme/js/scripts.js"
    ]
});

const path = require('path');
// specify a directory to hold the theme override templates
dnaTheme.addLoadPath(path.join(__dirname, '../fractal-theme'));
fractal.web.theme(dnaTheme); // tell Fractal to use the dna theme

// any other configuration or customisation here
module.exports = fractal;
