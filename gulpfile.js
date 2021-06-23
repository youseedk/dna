const gulp = require('gulp');

const plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
  replaceString: /\bgulp[\-.]/
});

const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const jsonSass = require('gulp-json-scss');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const svgSprite = require('gulp-svg-sprite');
const merge = require('merge-stream');
const prefixer = require('postcss-prefix-selector');

const paths = {
  assetsSource: {
    images: 'src/assets/images/',
    scss: 'src/assets/scss/',
    svg: 'src/assets/svg/'
  },
  tokensSource: 'src/tokens/',
  destination: {
    css: 'public/assets/css/',
    images: 'public/assetsimages/',
    svg: 'public/assets/svg/',
    theme: 'public/assets/theme/'
  },
  npmDestination: 'dist-npm/',
  fractal: {
    scss: 'fractal-theme/assets/scss/',
    js: 'fractal-theme/assets/js/',
    images: 'fractal-theme/assets/images/',
    favicons: 'fractal-theme/assets/favicon/'
  }
};

 // Create CSS files from SCSS files
gulp.task('css', () => {
  const processors = [
    postcssPresetEnv({
      stage: 3,
    })
  ];

  const minifying = [
    cssnano({
      autoprefixer: false,
      discardUnused: false
    })
  ];

  const cssprefixer = [
    prefixer({
      prefix: 'html:not(#ys-specificity)'
    })
  ];

  const ysBundle = gulp
    .src(`${paths.assetsSource.scss}/*.scss`)
    .pipe(plugins.sass({
      outputStyle: 'expanded',
      includePaths: ['node_modules/bootstrap/scss/']
    }).on('error', plugins.sass.logError))
    .pipe(plugins.postcss(processors))
    // rename bootstrap classes
    .pipe(plugins.replace('.container', '.ys-container'))
    .pipe(plugins.replace('.row', '.ys-row'))
    .pipe(plugins.replace('.col', '.ys-col'))
    .pipe(plugins.replace('.order-', '.ys-order-'))
    .pipe(plugins.replace('.offset-', '.ys-offset-'))
    .pipe(plugins.replace('.no-gutters', '.ys-no-gutters'))
    .pipe(plugins.postcss(cssprefixer))
    .pipe(gulp.dest(paths.destination.css))
    .pipe(plugins.postcss(minifying))
    .pipe(plugins.rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(paths.destination.css));

  const ysParts = gulp
    .src([`${paths.assetsSource.scss}/**/*.scss`, `!${paths.assetsSource.scss}/ys-bundle.scss`])
    .pipe(plugins.sass({
      outputStyle: 'expanded',
      includePaths: ['node_modules/bootstrap/scss/']
    }).on('error', plugins.sass.logError))
    .pipe(plugins.postcss(processors))
    // rename bootstrap classes
    .pipe(plugins.replace('.container', '.ys-container'))
    .pipe(plugins.replace('.row', '.ys-row'))
    .pipe(plugins.replace('.col', '.ys-col'))
    .pipe(plugins.replace('.order-', '.ys-order-'))
    .pipe(plugins.replace('.offset-', '.ys-offset-'))
    .pipe(plugins.replace('.no-gutters', '.ys-no-gutters'))
    .pipe(plugins.postcss(cssprefixer))
    .pipe(plugins.postcss(minifying))
    .pipe(gulp.dest(paths.destination.css));

  return merge(ysBundle, ysParts);
});

 // Lint scss files
gulp.task('lint-scss', () => {
  return gulp
    .src(['src/**/*.scss', '!src/**/generated/**/*.scss'])
    .pipe(plugins.stylelint({
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }));
});

gulp.task('copy-colors-to-npm', () => {
  return gulp
    .src(`${paths.assetsSource.scss}/generated/_ys-colors.scss`)
    .pipe(gulp.dest(`${paths.npmDestination}scss`));
});

 //	Convert colors.json file to .scss-file
gulp.task('json-to-scss', () => {
  return gulp
    .src([`${paths.tokensSource}colors.json`])
    .pipe(jsonSass({
      ignoreJsonErrors: false,
    }))
    .pipe(plugins.replace('color-primary-', 'color-'))
    .pipe(plugins.replace('color-typography-', 'color-'))
    .pipe(plugins.replace('color-ui-details-', 'color-'))
    .pipe(plugins.replace('color-splashes-', 'color-'))
    .pipe(plugins.replace('color-tags-', 'color-'))
    .pipe(plugins.replace('color-feedback-', 'color-'))
    .pipe(plugins.replace('-accent-greys', ''))
    .pipe(plugins.replace('color-accent-', 'color-'))
    .pipe(plugins.rename('_ys-colors.scss'))
    .pipe(gulp.dest(`${paths.assetsSource.scss}/generated`))
});

// Images
gulp.task('images', () => {
  return gulp
    .src(`${paths.assetsSource.images}/**`)
    .pipe(plugins.newer(paths.destination.images))
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(paths.destination.images));
});


/**
 *
 * Create SVG Sprites
 * Create JSON file lists from icon assets
 * Copy SVG files to public
 *
 */

gulp.task('icons', () => {
  const spriteCreation = gulp
    .src(`${paths.assetsSource.svg}/*.svg`)
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest: 'sprite',
          prefix: 'ys-',
          sprite: 'icons.svg'
        }
      },
      svg: {
        xmlDeclaration: false,
        namespaceIDs: true
      }
    }))
    .pipe(plugins.replace('id="', 'id="ys-icon-'))
    .pipe(gulp.dest(paths.destination.svg));

  // create json file lists
  const fileList = gulp
    .src(`${paths.assetsSource.svg}/*.svg`)
    .pipe(plugins.filelist('icons.json'))
    .pipe(plugins.replace(`src/assets/svg/`, ''))
    .pipe(plugins.replace('.svg', ''))
    .pipe(gulp.dest(`${paths.tokensSource}generated`));

  // copy svg files to public
  const copyTask = gulp
    .src(`${paths.assetsSource.svg}/*.svg`)
    .pipe(plugins.newer(`${paths.destination.svg}`))
    .pipe(plugins.rename((path) => {
      path.basename = path.basename.replace('_', '');
    }))
    .pipe(gulp.dest(`${paths.destination.svg}`));

  return merge(spriteCreation, fileList, copyTask);
});




/**
 *
 * Prepare and copy files to npm distribution folder
 *
 */
gulp.task('build-package', () => {
//gulp.task('build-package', ['copy-colors-to-npm'], () => {
  // copy package.json file and remove dependencies and devDepencies
  const packageJsonFile = gulp
    .src('package.json')
    .pipe(plugins.replace(/\"dependencies\"\: \{([^}]*)\}/, '"dependencies": {}'))
    .pipe(plugins.replace(/\"devDependencies\"\: \{([^}]*)\}/, '"devDependencies": {}'))
    .pipe(gulp.dest(paths.npmDestination))

  // copy readme file
  const readMeFile = gulp
    .src('README.md')
    .pipe(gulp.dest(paths.npmDestination))

  // copy scss files with settings
  const scssFiles = gulp
    .src(`${paths.assetsSource.scss}/settings/_ys-settings.scss`)
    .pipe(gulp.dest(`${paths.npmDestination}scss`));

  // copy generated css files and rename generated folder
  const cssFiles = gulp
    .src([`${paths.destination.css}/**/*.*`, `!${paths.destination.css}/*.css`])
    // change path to colors-file from generated to settings inside scss-files
    .pipe(plugins.replace('./generated', './settings'))
    .pipe(gulp.dest(`${paths.npmDestination}css`));

  // create file with css custom properties
  const cssSettings = gulp
    .src([`${paths.assetsSource.scss}/generated/_ys-colors.scss`, `${paths.assetsSource.scss}/settings/_ys-settings.scss`])
    .pipe(plugins.replace('$', '  --'))
    .pipe(plugins.replace('/*', '\n  /*'))
    .pipe(plugins.insert.prepend(':root {\n'))
    .pipe(plugins.insert.append('\n}'))
    .pipe(plugins.rename((path) => {
      path.basename = path.basename.replace('_', ''),
        path.extname = '.css'
    }))
    .pipe(gulp.dest(`${paths.npmDestination}css/settings`));

  // copy svg files
  const svgFiles = gulp
    .src(`${paths.assetsSource.svg}/**/*`)
    .pipe(gulp.dest(`${paths.npmDestination}svg`));

  // copy svg sprites
  const svgSprites = gulp
    .src(`${paths.destination.svg}/sprite/*.svg`)
    .pipe(plugins.rename((path) => {
      path.basename = path.basename + '-sprite'
    }))
    .pipe(gulp.dest(`${paths.npmDestination}svg`));

  // copy compiled bundle files
  const bundleFiles = gulp
    .src(`${paths.destination.css}/*.css`)
    .pipe(gulp.dest(`${paths.npmDestination}`));

  return merge(packageJsonFile, readMeFile, scssFiles, cssFiles, cssSettings, svgFiles, svgSprites, bundleFiles);
});

function watch(){
  gulp.watch(`${paths.fractal.js}**/*.js`, gulp.series(fractalJs));
  gulp.watch(`${paths.fractal.scss}**/*.scss`, gulp.series('fractal-scss'));
  gulp.watch(`${paths.assetsSource.scss}**/*.scss`, gulp.series('css'));
  gulp.watch(`${paths.assetsSource.svg}/**`, gulp.series('icons'));
}

exports.watch = watch;

// Configure a Fractal instance.
const fractal = require('./config/fractal-config');
const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

/*
 * Start the Fractal server
 *
 * In this example we are passing the option 'sync: true' which means that it will
 * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
 * Obviously this is completely optional!
 *
 * This task will also log any errors to the console.
 */
gulp.task('fractal:start', () => {
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
    logger.success(`BrowserSync options is now running at ${server.urls.sync.ui}`);
    logger.success(`External server is now running at ${server.urls.sync.external}`);
  });
});

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */
gulp.task('fractal:build', () => {
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
});


 // Build Fractal theme assets
gulp.task('fractal-scss', () => {
  return gulp
    .src(`${paths.fractal.scss}styles.scss`)
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(gulp.dest(`${paths.destination.theme}/css`));
});

const fractalJs = () => {
  const babelify = require("babelify");
  const sourcefile = `${paths.fractal.js}/scripts.js`;
  return browserify({
    entries: [sourcefile]
  }).transform('babelify', {
    presets: ['@babel/preset-env']
  })
    .bundle()
    .pipe(source('scripts.js'))
    .pipe(gulp.dest(`${paths.destination.theme}/js`));
};
exports.fractalJs = fractalJs


gulp.task('fractal-images', () => {
  return gulp
    .src(`${paths.fractal.images}**/*.*`)
    .pipe(gulp.dest(`${paths.destination.theme}/images`));
});

gulp.task('fractal-favicon', () => {
  return gulp
    .src(`${paths.fractal.favicons}/*.*`)
    .pipe(gulp.dest(`${paths.destination.theme}/favicon`));
});

// Build a search API based on front matter in markdown files
function fractalSearchApiGenerate(cb) {
  const fs = require('fs');
  const path = require('path');
  const walk = require('walk');
  const matter = require('gray-matter');
  const dirname = './src/docs';
  const destFile = './public/assets/theme/js/search.json';
  const walker = walk.walk(dirname);
  let prefix = ""

  fs.unlink(destFile, (err) => {
    if (err && err.code == 'ENOENT') {
      // file doesn't exist
      console.info("Didn't find a search.json file. Trying to build it from scratch");
    } else if (err) {
      // other errors, e.g. maybe we don't have enough permission
      console.error("Error occurred while trying to build search.json");
    } else {
      console.info('Found a search.json file and adding front-matter from markdown-files');
    }
  });

  const stream = fs.createWriteStream(destFile, { flags: 'a' });
  stream.write("[\n");
  walker.on("file", (root, fileStats, next) => {
    const str = fs.readFileSync(path.join(root, fileStats.name), 'utf8');
    stream.write(prefix);
    stream.write(JSON.stringify(matter(str), null, 4));
    prefix = ","
    next();
  });

  walker.on("errors", (root, nodeStatsArray, next) => {
    next();
  });

  walker.on("end", () => {
    stream.write("\n]");
    stream.end();
  });
  cb();
};

exports.fractalSearchApiGenerate = fractalSearchApiGenerate;

gulp.task('fractal-json-copy', () => {
  return gulp
    .src(['./fractal-theme/assets/js/json/search.json', './fractal-theme/assets/js/json/browsers.json'])
    .pipe(gulp.dest('./public/assets/theme/js'));
});

// Used for making custom domain "dna.yousee.dk" work with github pages
gulp.task('cname', () => {
 return gulp
    .src('config/CNAME')
    .pipe(gulp.dest('dist-site'));
});

// Creating src/docs/07-Contributors.md automaically based on ./CONTRIBUTING.md
gulp.task('fractal:contributing', () => {
  const frontmatter = `---
title: How to Contribute
url: /docs/contributors
category: page
primaryKeywords: issue bug contributions feature github npm pull request
secondaryKeywords: gitflow test gulp fork repository
---

<!-- ******************************************************************************** -->
<!-- *****          This file is automatically generated by a gulp task         ***** -->
<!-- ***** If you need to change its content please do it in ./CONTRIBUTING.md' ***** -->
<!-- ******************************************************************************** -->
`
  return gulp
    .src('./CONTRIBUTING.md')
    .pipe(plugins.replace('# How to contribute', ''))
    .pipe(plugins.insert.prepend(frontmatter))
    .pipe(plugins.rename('07-Contributors.md'))
    .pipe(gulp.dest('./src/docs'));
});


// Main gulp tasks
gulp.task('fractal-assets', gulp.series('fractal-json-copy', fractalSearchApiGenerate, 'fractal-scss', 'fractal-images', 'fractal-favicon', fractalJs), () => {});

gulp.task('npm-dist', gulp.series('json-to-scss', 'css', 'icons', 'fractal-assets', 'copy-colors-to-npm', 'build-package'), () => {});

gulp.task('default', gulp.series('fractal:contributing', 'icons', 'json-to-scss', 'fractal-assets', 'css', 'fractal:start', watch), () => {});

// CAUTION: Build task is used by TRAVIS CI for automatic build and deployment - change only this task if you know what you are doing */
gulp.task('build', gulp.series('fractal:contributing', 'icons', 'json-to-scss', 'fractal-assets', 'css', 'fractal:build', 'cname'), () => {});
