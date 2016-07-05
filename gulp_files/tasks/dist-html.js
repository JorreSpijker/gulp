var gulp = require('gulp');

gulp.task('dist-html', function() {
    return gulp.src("pub/*.html")
      .pipe(gulp.dest('dist'));
})
