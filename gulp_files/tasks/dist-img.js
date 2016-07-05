var gulp = require('gulp');

gulp.task('dist-img', function() {
    return gulp.src("pub/img/*")
      .pipe(gulp.dest('dist/img'));
})
