var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var plumber = require('gulp-plumber');

gulp.task('minify-css', function() {
    return gulp.src('pub/css/*.css')
        .pipe(plumber())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
})
