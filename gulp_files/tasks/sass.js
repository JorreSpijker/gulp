var gulp = require('gulp');
var sass = require('gulp-sass');
var auto = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('src/sass/*.sass')
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(auto())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('pub/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
