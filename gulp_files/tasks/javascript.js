var gulp = require('gulp');
var plumber = require('gulp-plumber');

gulp.task('javascript', function() {
    return gulp.src("src/js/**.js")
      .pipe(plumber())
      .pipe(gulp.dest('pub/js'));
});
