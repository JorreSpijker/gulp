var gulp = require('gulp');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');

gulp.task('jade', function() {
    return gulp.src('src/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('pub'))
        .pipe(browserSync.reload({
      stream: true
  }))
});
