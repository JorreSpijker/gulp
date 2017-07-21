var gulp = require('gulp');
var plumber = require('gulp-plumber');
var CONFIG = require('config-yml');

gulp.task('dist-img', function() {
    return gulp.src(CONFIG.img.pub + "/img/*")
      .pipe(plumber())
      .pipe(gulp.dest(CONFIG.img.dist));
})
