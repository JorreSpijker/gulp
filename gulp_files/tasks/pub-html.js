var gulp = require('gulp');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var panini = require('panini');
var CONFIG = require('config-yml');

gulp.task('html', function() {
    return gulp.src(CONFIG.html.src + '/*.html')
        .pipe(plumber())
        .pipe(panini({
          root: CONFIG.panini.pages,
          layouts: CONFIG.panini.layouts,
          partials: CONFIG.panini.partials,
          helpers: CONFIG.panini.helpers,
          data: CONFIG.panini.data
        }))
        .pipe(gulp.dest(CONFIG.html.pub))
        .pipe(browserSync.reload({
      stream: true
  }))
});
