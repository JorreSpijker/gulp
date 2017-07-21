var gulp = require('gulp');
var plumber = require('gulp-plumber');
var CONFIG = require('config-yml');

gulp.task('dist-html', function() {
    return gulp.src(CONFIG.pub + "/*.html")
      .pipe(plumber())
      .pipe(gulp.dest(CONFIG.dist));
})
