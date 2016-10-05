var gulp = require('gulp');

gulp.task('pub-css', function() {
    return gulp.src("src/css/*.css")
      .pipe(gulp.dest('pub/css'));
})
