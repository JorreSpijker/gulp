var gulp            = require('gulp');
var watch           = require('gulp-watch')
var browserSync     = require('browser-sync').create();
var runSequence     = require('run-sequence');
var requireDir      = require('require-dir');
requireDir('./gulp_files/tasks');

gulp.task('default', function() {
    runSequence(['sass','jade', 'javascript','coffeescript','image'], 'intro');
});

gulp.task('go',['browserSync', 'sass', 'jade', 'javascript','coffeescript','image'], function() {
    gulp.watch('src/sass/*.sass', ['sass']).on("change", browserSync.reload);
    gulp.watch('src/*.jade', ['jade']).on("change", browserSync.reload);
    gulp.watch('src/js/*.js', ['javascript']).on("change", browserSync.reload);
    gulp.watch('src/coffee/*.coffee', ['coffeescript']).on("change", browserSync.reload);
    gulp.watch('src/img/**/*.*', ['image']).on("change", browserSync.reload);
});
