var gulp = require('gulp');
var sass = require('gulp-sass');
var auto = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var CONFIG = require('config-yml');

gulp.task('scss', function() {
    return gulp.src(CONFIG.scss.src + '/*.scss')
        .pipe(plumber())
        .pipe(sass({
          includePaths: [
            CONFIG.scss.vendor.foundation,
            CONFIG.scss.vendor.motionui
          ]
        }))
        .pipe(sourcemaps.init())
        .pipe(auto())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(CONFIG.scss.pub))
        .pipe(browserSync.reload({
            stream: true
        }))
});
