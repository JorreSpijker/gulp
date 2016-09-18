var gulp = require('gulp');
var pug = require('gulp-pug');
var browserSync = require('browser-sync');

gulp.task('pug', function() {
    return gulp.src('src/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('pub'))
        .pipe(browserSync.reload({
      stream: true
  }))
});
