// *************************************
//
//   Gulpfile
//
// *************************************
//
// Available tasks:
//   `gulp css`
//   `gulp lint-scss``
//   `gulp json-to-scss`
//   `gulp images`
//   `gulp fonts`
//   `gulp icons`
//   `gulp ui-icons`
//   `gulp build-package`
//   `gulp npm-dist`
//   `gulp compile-assets`
//   `gulp`
//   `gulp build`
//   `gulp watch`
//   `gulp fractal:start`
//   `gulp fractal:build`
//   `gulp fractal-scss`
//   `gulp fractal-js`
//   `gulp fractal-images`
//   `gulp fractal-favicon`
//   `gulp cname`
//   `gulp fractal-assets`
//
// *************************************

'use strict';

const gulp = require('gulp');

const plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
  replaceString: /\bgulp[\-.]/
});

const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');
const jsonSass = require('gulp-json-scss'); // add to plugins
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const svgSprite = require('gulp-svg-sprite');
const runSequence = require('run-sequence');
const merge = require('merge-stream');

const paths = {
  componentsSource: 'src/components/',
  assetsSource: {
    fonts: 'src/assets/fonts/',
    images: 'src/assets/images/',
    scss: 'src/assets/scss/',
    svg: 'src/assets/svg/'
  },
  tokensSource: 'src/tokens/',
  destination: {
    css: 'public/assets/css/',
    fonts: 'public/assets/fonts/',
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

const githubClientId = process.env.GITHUB_AUTH_CLIENTID;
const githubClientSecret = process.env.GITHUB_AUTH_SECRET;

/**
 *
 * Create CSS files from SCSS files
 *
 */
gulp.task('css', () => {
  const processors = [
    cssnext({
      features: {
        calc: false
      }
    })
  ];

  const minifying = [
    cssnano({
      autoprefixer: false,
      discardUnused: false
    })
  ];

  const ysBundle = gulp
    .src(`${paths.assetsSource.scss}/*.scss`)
    .pipe(plugins.sass({
      outputStyle: 'expanded',
      includePaths: ['node_modules/bootstrap/scss/']
    }).on('error', plugins.sass.logError))
    .pipe(plugins.postcss(processors))
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
    .pipe(plugins.postcss(minifying))
    .pipe(gulp.dest(paths.destination.css));

  return merge(ysBundle, ysParts);
});

/**
 *
 *	Lint scss files
 *
 */
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


/**
 *
 *	Convert colors.json file to .scss-file
 *
 */
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

/**
 *
 * Images
 *
 */
gulp.task('images', () => {
  return gulp
    .src(`${paths.assetsSource.images}/**`)
    .pipe(plugins.newer(paths.destination.images))
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(paths.destination.images));
});

/**
 *
 * Fonts
 *
 */
gulp.task('fonts', () => {
  return gulp
    .src(`${paths.assetsSource.fonts}/**`)
    .pipe(plugins.newer(paths.destination.fonts))
    .pipe(gulp.dest(paths.destination.fonts));
});

/**
 *
 * Create SVG Sprites
 * Create JSON file lists from icon assets
 * Copy SVG files to public
 *
 */
gulp.task('icons', (cb) => {
  runSequence('ui-icons', 'icon-set', cb);
});

gulp.task('ui-icons', () => {
  const spriteSrc = 'ui-icons';
  const spriteCreation = gulp
    .src(`${paths.assetsSource.svg}/${spriteSrc}/*.svg`)
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
    .pipe(plugins.replace('id="', `id="ys-${spriteSrc}-`))
    .pipe(gulp.dest(paths.destination.svg));

  // create json file lists
  const fileList = gulp
    .src(`${paths.assetsSource.svg}/${spriteSrc}/*.svg`)
    .pipe(plugins.filelist(`${spriteSrc}.json`))
    .pipe(plugins.replace(`src/assets/svg/${spriteSrc}/`, ''))
    .pipe(plugins.replace('.svg', ''))
    .pipe(gulp.dest(`${paths.tokensSource}generated`));

  // copy svg files to public
  const copyTask = gulp
    .src(`${paths.assetsSource.svg}/${spriteSrc}/*.svg`)
    .pipe(plugins.newer(`${paths.destination.svg}/${spriteSrc}`))
    .pipe(gulp.dest(`${paths.destination.svg}/${spriteSrc}`));

  return merge(spriteCreation, fileList, copyTask);
});

gulp.task('icon-set', () => {
  const spriteSrc = 'icon-set';
  const spriteCreation = gulp
    .src([`${paths.assetsSource.svg}/${spriteSrc}/*.svg`, `!${paths.assetsSource.svg}/${spriteSrc}/_*.svg`])
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
    .pipe(plugins.replace('id="', `id="ys-${spriteSrc}-`))
    .pipe(gulp.dest(paths.destination.svg));

  // create json file lists
  const fileList = gulp
    .src([`${paths.assetsSource.svg}/${spriteSrc}/*.svg`, `!${paths.assetsSource.svg}/${spriteSrc}/_*.svg`])
    .pipe(plugins.filelist(`${spriteSrc}.json`))
    .pipe(plugins.replace(`src/assets/svg/${spriteSrc}/`, ''))
    .pipe(plugins.replace('.svg', ''))
    .pipe(gulp.dest(`${paths.tokensSource}generated`));

  // copy svg files to public
  const copyTask = gulp
    .src(`${paths.assetsSource.svg}/${spriteSrc}/*.svg`)
    .pipe(plugins.newer(`${paths.destination.svg}/${spriteSrc}`))
    .pipe(plugins.rename( (path) => {
      path.basename = path.basename.replace('_', '');
    }))
    .pipe(gulp.dest(`${paths.destination.svg}/${spriteSrc}`));

  return merge(spriteCreation, fileList, copyTask);
});

/**
 *
 * Prepare and copy files to npm distribution folder
 *
 */
gulp.task('build-package', () => {
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
    .src([`${paths.assetsSource.scss}/settings/_ys-settings.scss`, `${paths.assetsSource.scss}/generated/_ys-colors.scss`])
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
    .pipe(plugins.insert.prepend(':root {\n'))
    .pipe(plugins.insert.append('\n}'))
    .pipe(plugins.rename( (path) => {
      path.basename = path.basename.replace('_', ''),
      path.extname = '.css'
    }))
    .pipe(gulp.dest(`${paths.npmDestination}css/settings`));

  // copy font files
  const fontFiles = gulp
    .src(`${paths.assetsSource.fonts}/**/*`)
    .pipe(gulp.dest(`${paths.npmDestination}/fonts`));

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

  return merge(packageJsonFile, readMeFile, scssFiles, cssFiles, cssSettings, fontFiles, svgFiles, svgSprites, bundleFiles);
});

gulp.task('npm-dist', () => {
  runSequence(['compile-assets'],
    'build-package'
  );
});

/**
 *
 *	Build assets
 *
 */
gulp.task('compile-assets', () => {
  runSequence(['json-to-scss'],
    'css', 'images', 'icons', 'fonts', 'fractal-assets'
  );
});

//Default
gulp.task('default', (cb) => {
  runSequence('icons', 'jsonToScss',
    ['fractal-assets', 'css', 'images', 'watch'],
    'fractal:start'
  );
});


 /* BUILD */
 // CAUTION: Used by TRAVIS CI for automatic build and deployment - change only this task if you know what you are doing */
 gulp.task('build', (cb) => {
  runSequence(['jsonToScss'], 'icons', 'fractal-assets', 'css', 'fractal:build', 'cname', cb);
});

/**
 *
 * Watch for changes
 *
 */
gulp.task('watch', () => {
  gulp.watch([`${paths.assetsSource.scss}/**/*.scss`], ['css']);
  gulp.watch([`${paths.componentsSource}**/*.scss`], ['css']);
  gulp.watch([`${paths.assetsSource.images}/**`], ['images']);
  gulp.watch([`${paths.assetsSource.svg}/**`], ['icons']);
  gulp.watch([`${paths.fractal.scss}/**/*.scss`], ['fractal-scss']);
  gulp.watch([`${paths.fractal.js}/**/*.js`], ['fractal-js']);
});

/*
 * Configure a Fractal instance.
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
gulp.task('fractal:start', ['compile-assets'], () => {
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

/**
 *
 * Build Fractal theme assets
 *
 */
gulp.task('fractal-scss', () => {
  gulp
    .src(`${paths.fractal.scss}styles.scss`)
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(gulp.dest(`${paths.destination.theme}/css`));
});

gulp.task('fractal-js', () => {
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
});

gulp.task('fractal-images', () => {
  gulp
    .src(`${paths.fractal.images}**/*.*`)
    .pipe(gulp.dest(`${paths.destination.theme}/images`));
});

gulp.task('fractal-favicon', () => {
  gulp
    .src(`${paths.fractal.favicons}/*.*`)
    .pipe(gulp.dest(`${paths.destination.theme}/favicon`));
});

/* Used for making custom domain "dna.yousee.dk" work with github pages */
gulp.task('cname', () => {
  gulp
    .src('config/CNAME')
    .pipe(gulp.dest('dist-site'));
});

gulp.task('fractal-assets', ['fractal-scss', 'fractal-js', 'fractal-images', 'fractal-favicon']);
