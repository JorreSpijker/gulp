var gulp = require('gulp');
var plumber = require('gulp-plumber');

gulp.task('pub-css', function() {
    return gulp.src("src/css/*.css")
      .pipe(plumber())
      .pipe(gulp.dest('pub/css'));
})
