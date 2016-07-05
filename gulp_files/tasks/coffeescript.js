var gulp = require('gulp');
var coffee = require('gulp-coffee');

gulp.task('coffeescript', function() {
    return gulp.src('src/coffee/*.coffee')
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest('pub/js/'));
});
