const gulp = require('gulp');
const less = require('gulp-less');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');

const paths = {
    js: 'public/javascripts/**/*.js',
    less: 'public/stylesheets/**/*.less',
    ejs: 'views/**/*.ejs',
};

gulp.task('styles', () => {
    return gulp.src(paths.less)
        .pipe(less())
        .pipe(cssnano())
        //.pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist-gulp/stylesheets'));
});

gulp.task('scripts', () => {
    return gulp.src(paths.js)
        .pipe(babel())
        //.pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist-gulp/javascripts'));
});

gulp.task('ejs', () => {
    return gulp.src(paths.ejs)
        .pipe(ejs())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(rename({ extname: '.html' }))
        .pipe(gulp.dest('dist-gulp/html'));
});

gulp.task('default', gulp.series('styles', 'scripts', 'ejs'));
