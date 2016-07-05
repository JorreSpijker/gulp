var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify-js', function() {
    return gulp.src('pub/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})
