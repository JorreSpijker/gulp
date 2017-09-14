var gulp = require('gulp');
var pug = require('gulp-pug');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var panini = require('panini');
var CONFIG = require('config-yml');

gulp.task('pug', function() {
    return gulp.src(CONFIG.pug.src + '/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(CONFIG.pug.pub))
        .pipe(browserSync.reload({
      stream: true
  }))
});
