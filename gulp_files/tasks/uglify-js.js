var gulp = require('gulp');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var CONFIG = require('config-yml');

gulp.task('uglify-js', function() {
    return gulp.src(CONFIG.js.pub + '/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(CONFIG.js.dist));
})
