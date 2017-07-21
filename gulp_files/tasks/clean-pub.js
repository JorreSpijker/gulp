var gulp = require('gulp');
var clean = require('gulp-clean');
var plumber = require('gulp-plumber');
var CONFIG = require('config-yml');

gulp.task('clean-pub', function() {
    return gulp.src(CONFIG.pub)
      .pipe(plumber())
      .pipe(clean());
})
