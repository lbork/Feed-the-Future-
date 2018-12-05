/*
 * load plugins
 */

// package lets
const pkg = require('./package.json')

// gulp
const gulp = require('gulp')

// load all plugins in "devDependencies" into the letiable $
const $ = require('gulp-load-plugins')({
  pattern: ['*'],
  scope: ['devDependencies']
})

const onError = err => {
  console.log(err)
}

/*
 * project configuration
 */

const url = 'http://feedthefuture.test'

/*
 * tools
 */

function getFolders(dir) {
  return $.fs.readdirSync(dir).filter(function(file) {
    return $.fs.statSync($.path.join(dir, file)).isDirectory()
  })
}

/*
 * clean
 */

gulp.task('clean', () => {
  return $.del(['**/.DS_Store', pkg.paths.build.base + '*'])
})

/*
 * scripts
 */

gulp.task('scripts', () => {
  return gulp
    .src([pkg.paths.src.js + 'index.js'])
    .pipe(
      $.webpackStream({
        module: {
          loaders: [
            {
              test: /.js?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['env']
              }
            },
            {
              test: /\.json$/,
              loader: 'json-loader'
            }
          ]
        },
        plugins: [
          new $.webpackStream.webpack.optimize.UglifyJsPlugin({
            minimize: false,
            sourceMap: true,
            compress: {
              warnings: false
            }
          }),
          new $.webpackStream.webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version)
          })
        ],
        devtool: 'source-map',
        entry: {
          index: [pkg.paths.src.js + 'index.js']
        },
        output: {
          filename: '[name].js',
          publicPath: pkg.paths.public
        }
      })
    )
    .pipe(gulp.dest(pkg.paths.build.js))
    .pipe($.browserSync.stream({ once: true }))
    .pipe($.notify({ message: 'Scripts task complete', onLast: true }))
})

/*
 * styles
 */

let processors = [$.autoprefixer(), $.cssMqpacker()]

let cssNanoOpts = {
  minifySelectors: false,
  reduceIdents: false,
  zindex: false
}

let browserSyncOpts = {
  stream: true
}

let cssNotifyOpts = {
  message: 'Styles task complete',
  onLast: true
}

gulp.task('styles:base', () => {
  return gulp
    .src([pkg.paths.src.css + '*.scss'])
    .pipe($.plumber({ errorHandler: onError }))
    .pipe($.sourcemaps.init())
    .pipe($.sassGlob())
    .pipe($.sass())
    .pipe($.postcss(processors))
    .pipe($.cssnano(cssNanoOpts))
    .pipe($.sourcemaps.write('maps'))
    .pipe($.plumber.stop())
    .pipe(gulp.dest(pkg.paths.build.css))
    .pipe($.browserSync.reload(browserSyncOpts))
    .pipe($.notify(cssNotifyOpts))
})

let modulesPath = './views/modules/'
let folders = getFolders(modulesPath)

gulp.task('styles:modules', () => {
  let tasks = folders.map(function(folder) {
    return gulp
      .src([$.path.join(modulesPath, folder, '/index.scss')])
      .pipe($.plumber({ errorHandler: onError }))
      .pipe($.sourcemaps.init())
      .pipe($.sassGlob())
      .pipe($.sass())
      .pipe($.postcss(processors))
      .pipe($.cssnano(cssNanoOpts))
      .pipe($.sourcemaps.write('maps'))
      .pipe(
        $.rename({
          basename: folder
        })
      )
      .pipe($.plumber.stop())
      .pipe(gulp.dest(pkg.paths.build.css))
      .pipe($.browserSync.reload(browserSyncOpts))
      .pipe($.notify(cssNotifyOpts))
  })
})

/*
 * images
 */

gulp.task('images', () => {
  return gulp
    .src([pkg.paths.src.img + '**/*.{jpg,png,gif,svg}'])
    .pipe($.changed(pkg.paths.build.img))
    .pipe(
      $.imagemin({ optimizationLevel: 7, progressive: true, interlaced: true })
    )
    .pipe(gulp.dest(pkg.paths.build.img))
    .pipe($.notify({ message: 'Images task complete', onLast: true }))
})

gulp.task('browser-sync', function() {
  let files = ['**/*.php', '**/*.twig', '**/*.{png,jpg,gif}']

  $.browserSync.init(files, {
    proxy: url,
    injectChanges: true
  })
})

/*
 * fonts
 */

gulp.task('fonts', () => {
  return gulp
    .src([pkg.paths.src.font + '**/*.{woff,woff2}'])
    .pipe($.changed(pkg.paths.build.font))
    .pipe(gulp.dest(pkg.paths.build.font))
    .pipe($.notify({ message: 'Fonts task complete', onLast: true }))
})

/*
 * default task
 */

gulp.task('default', callback => {
  $.runSequence(
    'clean',
    [
      'scripts',
      'styles:base',
      'styles:modules',
      'images',
      'fonts',
      'browser-sync'
    ],
    () => {
      gulp.watch(
        [pkg.paths.src.base + '{,*/}{,*/}*.js', modulesPath + '{,*/}{,*/}*.js'],
        ['scripts']
      )
      gulp.watch([pkg.paths.src.css + '{,*/}{,*/}*.scss'], ['styles:base'])
      gulp.watch([modulesPath + '{,*/}{,*/}*.scss'], ['styles:modules'])
      gulp.watch(pkg.paths.src.img + '**/*.{jpg,png,gif}', ['images'])
    }
  )
})
