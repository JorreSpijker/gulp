var gulp = require('gulp');
var image = require('gulp-imagemin');
var plumber = require('gulp-plumber');
var CONFIG = require('config-yml');

gulp.task('image', function() {
    return gulp.src(CONFIG.img.src + '*')
        .pipe(plumber())
        .pipe(image())
        .pipe(gulp.dest(CONFIG.img.pub))
});
