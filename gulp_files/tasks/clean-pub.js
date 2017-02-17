var gulp = require('gulp');
var clean = require('gulp-clean');
var plumber = require('gulp-plumber');

gulp.task('clean-pub', function() {
    return gulp.src("pub")
      .pipe(plumber())
      .pipe(clean());
})
