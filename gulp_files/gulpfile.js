var gulp            = require('gulp');
var watch           = require('gulp-watch')
var browserSync     = require('browser-sync').create();
var runSequence     = require('run-sequence');
var requireDir      = require('require-dir');
var CONFIG          = require('config-yml');
requireDir('./tasks');

gulp.task('default', function() {
    runSequence(['scss','pug','pub-css','javascript','coffeescript','image'], 'intro');
});

gulp.task('go',['browserSync', 'scss','pub-css', 'pug', 'javascript','coffeescript','image'], function() {
    gulp.watch(CONFIG.scss.src + '/**/*.scss', ['scss']).on("change", browserSync.reload);
    gulp.watch(CONFIG.css.src + '/*.css', ['pub-css']).on("change", browserSync.reload);
    gulp.watch(CONFIG.pug.src + '/*.pug', ['pug']).on("change", browserSync.reload);
    gulp.watch(CONFIG.js.src + '/**/*.js', ['javascript']).on("change", browserSync.reload);
    gulp.watch(CONFIG.coffee.src + '/**/*.coffee', ['coffeescript']).on("change", browserSync.reload);
    gulp.watch(CONFIG.img.src + '/**/*.*', ['image']).on("change", browserSync.reload);
});
