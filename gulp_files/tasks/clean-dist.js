var gulp = require('gulp');
var clean = require('gulp-clean');
var plumber = require('gulp-plumber');
var CONFIG = require('config-yml');

gulp.task('clean-dist', function() {
    return gulp.src(CONFIG.dist)
      .pipe(plumber())
      .pipe(clean());
})
