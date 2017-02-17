var gulp = require('gulp');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');

gulp.task('publish', function() {
      plumber()
      runSequence(['minify-css','uglify-js'], ['dist-css','dist-html','dist-img']);
});
