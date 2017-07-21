var gulp = require('gulp');
var coffee = require('gulp-coffee');
var plumber = require('gulp-plumber');
var CONFIG = require('config-yml');

gulp.task('coffeescript', function() {
    return gulp.src(CONFIG.coffee.src + '/*.coffee')
        .pipe(plumber())
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest(CONFIG.coffee.pub));
});
