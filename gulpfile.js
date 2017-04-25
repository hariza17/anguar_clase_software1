var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    del = require('del'),
    browserify = require('browserify');


var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();


gulp.task('clean', function (cb) {
    del(['dist'], cb);
});

gulp.task('bower', function () {

    var install = require("gulp-install");

    return gulp.src(['./bower.json'])
        .pipe(install());
});

gulp.task('build', [ 'clean', 'bower'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    return gulp.watch(['./index.html', './partials/*.html', './styles/*.*css', './js/**/*.js'], ['build']);
});

gulp.task('webserver', ['watch'], function () {


    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: "http://localhost:8000/index.html"
        }));
});

gulp.task('dev', ['clean','watch', 'webserver']);

