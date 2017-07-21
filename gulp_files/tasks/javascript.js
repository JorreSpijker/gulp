var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var CONFIG = require('config-yml');

gulp.task('javascript', function() {
      gulp.src(CONFIG.js.src + "/*.js")
        .pipe(gulp.dest(CONFIG.js.pub));

      // gulp.src(CONFIG.js.vendor.jquery)
        // .pipe(gulp.dest(CONFIG.js.pub));

      gulp.src(CONFIG.js.vendor.what_input)
        .pipe(gulp.dest(CONFIG.js.pub));

    return gulp.src(CONFIG.js.vendor.foundation)
      .pipe(babel())
      .pipe(concat('foundation.js'))
      .pipe(gulp.dest(CONFIG.js.pub));


});
