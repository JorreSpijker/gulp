var gulp = require('gulp');
var clean = require('gulp-clean');
var plumber = require('gulp-plumber');

gulp.task('clean-dist', function() {
    return gulp.src("dist")
      .pipe(plumber())
      .pipe(clean());
})
