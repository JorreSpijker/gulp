var gulp = require('gulp');
var image = require('gulp-imagemin')
var plumber = require('gulp-plumber');

gulp.task('image', function() {
    return gulp.src('src/img/*')
        .pipe(plumber())
        .pipe(image())
        .pipe(gulp.dest('pub/img'))
});
