var gulp = require('gulp');
var coffee = require('gulp-coffee');
var plumber = require('gulp-plumber');

gulp.task('coffeescript', function() {
    return gulp.src('src/coffee/*.coffee')
        .pipe(plumber())
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest('pub/js/'));
});
