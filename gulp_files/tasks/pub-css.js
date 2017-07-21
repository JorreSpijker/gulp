var gulp = require('gulp');
var plumber = require('gulp-plumber');
var CONFIG = require('config-yml');

gulp.task('pub-css', function() {
    return gulp.src(CONFIG.css.src + "/*.css")
      .pipe(plumber())
      .pipe(gulp.dest(CONFIG.css.pub));
})
