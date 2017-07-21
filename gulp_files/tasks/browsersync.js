var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var CONFIG = require('config-yml');

gulp.task('browserSync', function() {
  var files = [
      CONFIG.pug.src + '/*.pug',
      CONFIG.scss.src + '/*.scss',
      CONFIG.css.src + '/*.css',
      CONFIG.js.src + '/*.js',
      CONFIG.coffee.src + '/*.coffee',
  ];

  browserSync.init(files, {
    server: {
      baseDir: CONFIG.pub
    },
  })
});
