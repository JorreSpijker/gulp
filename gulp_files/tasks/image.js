var gulp = require('gulp');
var image = require('gulp-imagemin')

gulp.task('image', function() {
    return gulp.src('src/img/*')
        .pipe(image())
        .pipe(gulp.dest('pub/img'))
});
