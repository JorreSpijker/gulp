var gulp = require('gulp');

gulp.task('javascript', function() {
    return gulp.src("src/js/**.js")
      .pipe(gulp.dest('pub/js'));
});
