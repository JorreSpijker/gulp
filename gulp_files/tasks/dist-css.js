var gulp = require('gulp');
var plumber = require('gulp-plumber');
var CONFIG = require('config-yml');

gulp.task('dist-css', function() {
    return gulp.src(CONFIG.css.pub + "/*.css")
      .pipe(plumber())
      .pipe(gulp.dest(CONFIG.css.dist));
})
