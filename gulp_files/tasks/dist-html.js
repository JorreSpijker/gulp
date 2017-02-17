var gulp = require('gulp');
var plumber = require('gulp-plumber');

gulp.task('dist-html', function() {
    return gulp.src("pub/*.html")
      .pipe(plumber())
      .pipe(gulp.dest('dist'));
})
