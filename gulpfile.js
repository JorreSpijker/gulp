var gulp            = require('gulp');
var watch          = require('gulp-watch')
var browserSync     = require('browser-sync').create();
var runSequence     = require('run-sequence');
var requireDir      = require('require-dir');
requireDir('./gulp_files/tasks');

gulp.task('default', function() {
    runSequence(['scss','pug','pub-css','javascript','coffeescript','image'], 'intro');
});

gulp.task('go',['browserSync', 'scss','pub-css', 'pug', 'javascript','coffeescript','image'], function() {
    gulp.watch('src/scss/*.scss', ['scss']).on("change", browserSync.reload);
    gulp.watch('src/css/*.css', ['pub-css']).on("change", browserSync.reload);
    gulp.watch('src/*.pug', ['pug']).on("change", browserSync.reload);
    gulp.watch('src/js/*.js', ['javascript']).on("change", browserSync.reload);
    gulp.watch('src/coffee/*.coffee', ['coffeescript']).on("change", browserSync.reload);
    gulp.watch('src/img/**/*.*', ['image']).on("change", browserSync.reload);
}); 
