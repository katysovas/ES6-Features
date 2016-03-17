// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
const babel = require('gulp-babel');


// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('css/*.css')
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});

gulp.task('babelMe', () => {
    return gulp.src('js/*.js')
        .pipe(babel({
            presets: ['es2015'], 
            compact: true
        }))
        .pipe(gulp.dest('js-babel'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(babel({
            presets: ['es2015'], 
            compact: true
        }))
        .pipe(gulp.dest('js-babel'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js-babel'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src('css/*.css')
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('dist'))
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['css', 'scripts']);