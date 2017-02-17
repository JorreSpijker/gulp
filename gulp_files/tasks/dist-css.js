var gulp = require('gulp');
var plumber = require('gulp-plumber');

gulp.task('dist-css', function() {
    return gulp.src("pub/css/*.css")
      .pipe(plumber())
      .pipe(gulp.dest('dist/css'));
})
