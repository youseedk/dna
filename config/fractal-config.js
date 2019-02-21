'use strict';

const fractal = require('@frctl/fractal').create();

fractal.set('project.title', 'YouSee Design System'); // title for the project
fractal.set('project.version', 'v0.1');
fractal.set('project.author', 'YouSee Digital Warehouse');
fractal.web.set('builder.dest', 'dist-site'); // destination for the static export
fractal.web.set('static.path', 'public');
fractal.docs.set('path', 'src/docs'); // location of the documentation directory.
fractal.components.set('path', 'src/elements'); // location of the component directory.
fractal.components.set('default.preview', '@element-preview');
fractal.components.set('default.status', 'wip');
fractal.components.set('label', 'Elements'); // default is 'Components'

/* THEMING */
// create a new instance with custom config options
const YSDStheme = require('@frctl/mandelbrot')({
    skin: "black",
    // any other theme configuration values here
    "nav": ["docs", "components"],
    "panels": ["html", "notes"],
    "styles": [
        "default",
        "/assets/css/styles.css",
    ],
    "scripts": [
        "default",
        "/assets/js/scripts.js"
    ]
});

const path = require('path');
// specify a directory to hold the theme override templates
YSDStheme.addLoadPath(path.join(__dirname, '/fractal-theme'));
fractal.web.theme(YSDStheme); // tell Fractal to use the configured theme by default

// any other configuration or customisation here
module.exports = fractal;