var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('publish', function() {
      runSequence(['minify-css','uglify-js'], ['dist-html','dist-img']);
});
