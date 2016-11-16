var gulp = require('gulp');

gulp.task('dist-css', function() {
    return gulp.src("pub/css/*.css")
      .pipe(gulp.dest('dist/css'));
})
