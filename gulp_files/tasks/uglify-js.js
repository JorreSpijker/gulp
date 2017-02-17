var gulp = require('gulp');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');

gulp.task('uglify-js', function() {
    return gulp.src('pub/js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})
