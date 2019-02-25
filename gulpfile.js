// *************************************
//
//   Gulpfile
//
// *************************************
//
// Available tasks:
//   `gulp`
//   `gulp clean:public`
//   `gulp css`
//   `gulp jsonToScss`
//   `gulp images`
//   `gulp fonts`
//   `gulp svgSprites`
//   `gulp npmDist`
//   `gulp fractalTheme`
//   `gulp lint:scss`
//   `gulp compile-assets`
//   `gulp build`
//   `gulp watch`
//   `gulp fractal:build`
//
// *************************************

'use strict';

const gulp = require('gulp');

const plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
  replaceString: /\bgulp[\-.]/
});

const del = require('del');
const reporter = require('postcss-reporter');
const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');
const jsonSass = require('gulp-json-scss'); // add to plugins
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const tinycolor = require('tinycolor2');
const svgSprite = require('gulp-svg-sprite');
const runSequence = require('run-sequence');

const paths = {
  componentsSource: 'src/components/',
  assetsSource: 'src/assets/',
  tokensSource: 'src/tokens/',
  destination: 'public/assets/',
  npmDestination: 'dist-npm',
  fractal: {
    scss: 'fractal-theme/scss',
    js: 'fractal-theme/js'
  }
}

/**
 *
 *	Clean up public
 *
 */
gulp.task('clean:public', function () {
  return del(paths.destination);
});

gulp.task('css', function () {
  var processors = [
    cssnext({
      browsers: '> 1% in DK',
      features: {
        calc: false,
      }
    })
  ];

  var minifying = [
    cssnano({
      autoprefixer: false
    })
  ];

  return gulp.src(paths.assetsSource + 'scss/*.scss')
    .pipe(plugins.sass({
      sourceComments: 'normal'
    }).on('error', plugins.sass.logError))
    .pipe(plugins.postcss(processors))
    .pipe(gulp.dest(paths.destination + 'css'))
    .pipe(plugins.postcss(minifying))
    .pipe(plugins.rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(paths.destination + 'css'))
});

/**
 *
 *	Lint scss files
 *
 */
gulp.task('lint-scss', function () {
  const gulpStylelint = require('gulp-stylelint');

  return gulp
    .src(['src/**/*.scss', '!src/**/generated/**/*.scss'])
    .pipe(gulpStylelint({
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }));
});

/**
 *
 *	Convert colors.json file to .scss-file
 *
 */
gulp.task('jsonToScss', function () {
  gulp.src(['src/tokens/colors.json'])
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
    .pipe(plugins.rename('_colors.scss'))
    .pipe(gulp.dest('src/assets/scss/settings'))
});


/**
 *
 * Images
 *
 */
gulp.task('images', function () {
  return gulp.src(paths.assetsSource + 'img/**')
    .pipe(plugins.newer(paths.destination + 'img'))
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(paths.destination + 'img'));
});

/**
 *
 * Fonts
 *
 */
gulp.task('fonts', function () {
  return gulp.src(paths.assetsSource + 'fonts/**')
    .pipe(plugins.newer(paths.destination + 'fonts'))
    .pipe(gulp.dest(paths.destination + 'fonts'));
});


/**
 * 
 * Create SVG Sprites
 * Create JSON file lists from icon assets
 * Copy SVG files to public
 * 
 */
const sprites = {
  sources: ['ui-icons', 'icon-set']
};

gulp.task('svgSprites', function () {
  sprites.sources.forEach(function (spriteSrc) {
    // create sprites
    gulp.src([paths.assetsSource + '/svg/' + spriteSrc + '/*.svg', '!' + paths.assetsSource + '/svg/' + spriteSrc + '/_*.svg'])
      .pipe(svgSprite({
        mode: {
          symbol: {
            dest: 'sprite',
            prefix: 'ys-',
            sprite: spriteSrc + '.svg'
          }
        },
        svg: {
          xmlDeclaration: false,
          namespaceIDs: true
        }
      }))
      .pipe(plugins.replace('id="', 'id="ys-' + spriteSrc + '-'))
      .pipe(gulp.dest(paths.destination + 'svg'));
    // create json file lists
    gulp.src([paths.assetsSource + '/svg/' + spriteSrc + '/*.svg', '!' + paths.assetsSource + '/svg/' + spriteSrc + '/_*.svg'])
      .pipe(plugins.filelist(spriteSrc + '.json'))
      .pipe(plugins.replace("src/assets/svg/" + spriteSrc + "/", ""))
      .pipe(gulp.dest(paths.tokensSource + 'generated'));
    // copy svg files to public
    gulp.src(paths.assetsSource + 'svg/' + spriteSrc + '/*.svg')
      .pipe(plugins.newer(paths.destination + 'svg/' + spriteSrc))
      .pipe(plugins.rename(function (path) {
        path.basename = path.basename.replace("_", "")
      }))
      .pipe(gulp.dest(paths.destination + '/svg/' + spriteSrc))
  })
})


/**
 * 
 * Copy files to npm distribution folder
 * 
 */
gulp.task('npmDist', function () {
  gulp.src([paths.assetsSource + '/**/*', '!' + paths.assetsSource + '/**/fonts{,/**}'])
    .pipe(gulp.dest(paths.npmDestination + '/src'))
  gulp.src(paths.destination + '/**/*')
    .pipe(gulp.dest(paths.npmDestination + '/dist'));
});


/**
 *
 *	Build assets
 *
 */
gulp.task('compile-assets', ['jsonToScss', 'css', 'images', 'svgSprites', 'fonts', 'fractal-assets']);


/**
 * 
 * Build fractal theming, web site and npm package
 *  
 */
gulp.task('build', ['fractal-assets', 'compile-assets', 'fractal:build', 'npmDist']);

/*
 * Configure a Fractal instance.
 *
 * This configuration could also be done in a separate file, provided that this file
 * then imported the configured fractal instance from it to work with in your Gulp tasks.
 * i.e. const fractal = require('./my-fractal-config-file');
 */
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
gulp.task('fractal:start', ['compile-assets'], function () {
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
gulp.task('fractal:build', function () {
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
});

/**
 *
 * Watch for changes
 *
 */
gulp.task('watch', function () {
  gulp.watch([paths.assetsSource + 'scss/**/*.scss'], ['css']);
  gulp.watch([paths.componentsSource + '**/*.scss'], ['css']);
  gulp.watch([paths.assetsSource + 'images/**'], ['images']);
  gulp.watch([paths.assetsSource + 'svg/**'], ['svgSprites']);
  gulp.watch([paths.fractal.scss + '/**/*.scss'], ['fractal-scss']);
  gulp.watch([paths.fractal.js + '/**/*.js'], ['fractal-js']);
});

gulp.task('default', function (callback) {
  runSequence('svgSprites',
    ['fractal-assets', 'jsonToScss', 'css', 'images', 'watch'],
    'fractal:start'
  );
});


/**
 * 
 * Build Fractal theme assets
 * 
 */
gulp.task('fractal-scss', function () {
  gulp.src(paths.fractal.scss + '/styles.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(gulp.dest(paths.destination + 'theme/css'))
})

gulp.task('fractal-js', () => {
  var babelify = require("babelify");
  const sourcefile = paths.fractal.js + '/scripts.js';
  return browserify({
      entries: [sourcefile]
    }).transform('babelify', {
      presets: ['@babel/preset-env']
    })
    .bundle()
    .pipe(source('scripts.js'))
    .pipe(gulp.dest(paths.destination + 'theme/js'));
});

gulp.task('fractal-assets', ['fractal-scss', 'fractal-js']);