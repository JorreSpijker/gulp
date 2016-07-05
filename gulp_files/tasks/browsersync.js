var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  var files = [
      'src/*.jade',
      'src/sass/*.sass',
      'src/js/*.js',
      'src/coffee/*.coffee'
  ];

  browserSync.init(files, {
    server: {
      baseDir: 'pub'
    },
  })
});
