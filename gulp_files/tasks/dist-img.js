var gulp = require('gulp');
var plumber = require('gulp-plumber');

gulp.task('dist-img', function() {
    return gulp.src("pub/img/*")
      .pipe(plumber())
      .pipe(gulp.dest('dist/img'));
})
