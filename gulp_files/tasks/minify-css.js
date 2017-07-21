var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var CONFIG = require('config-yml');

gulp.task('minify-css', function() {
    return gulp.src(CONFIG.css.pub + '/*.css')
        .pipe(plumber())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(CONFIG.css.dist));
})
