var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');
var angularTemplatecache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var insert = require('gulp-insert');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
var babel = require('gulp-babel');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var clipper = require('gulp-clipper');

var config = {
    src: './src',
    tmp: '.tmp',
    build: './build',
}

gulp.task('html', function(){
    return gulp.src(config.src+'/index.html')
        .pipe(gulp.dest(config.build));
});


gulp.task('resources', function(){
    return gulp.src('./resources/**/*')
        .pipe(gulp.dest(config.build));
});

gulp.task('sass', function () {
  return gulp.src([
        './lib/**/**.css',
        config.src+'/style/reset.css',
        config.src+'/style/variables.scss',
        config.src+'/style/*.scss',
        config.src+'/**/*.scss',
        config.src+'/**/*.css'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.build));
});

gulp.task('js', ['templateCache', 'lib', 'gulpClips'], function(){
    return gulp.src([config.src+'/**/*.module.js', config.tmp+'/**/*.js', config.src+'/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(concat('bundle.js', {newLine: '\n})();\n(function(){\n'}))
        .pipe(insert.prepend('(function(){\n'))
        .pipe(insert.append('\n})();'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.build));
});

gulp.task('gulpClips', function(){
    gulp.src([config.src+'/**/*.*'])
        .pipe(clipper('gulpClips.js'))
        .pipe(gulp.dest(config.tmp))
});

gulp.task('templateCache', function(){
    return gulp.src([config.src + '/**/*.tpl.html'])
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true,
        }))
        .pipe(angularTemplatecache('templateCacheHtml.js', {
            module: 'gulp.templateCache'
        }))
        .pipe(gulp.dest(config.tmp));
});

gulp.task('lib', function(){
    return gulp.src(['./lib/nodeLibs.js', './lib/**/*.js'])
        .pipe(concat('libs.js'))
        .pipe(browserify({
          insertGlobals : true,
        }))
        .pipe(gulp.dest(config.build));
});


gulp.task('build', ['html', 'resources', 'sass', 'js'], function(){})

gulp.task('default', ['build'], function(){
    gulp.watch(config.src+'/**/*.*', function(event) {
        gulp.start('build');
    });
})
