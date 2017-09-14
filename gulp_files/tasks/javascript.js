var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var CONFIG = require('config-yml');

gulp.task('javascript', function() {
      gulp.src(CONFIG.js.src + "/*.js")
        .pipe(gulp.dest(CONFIG.js.pub));

      gulp.src(CONFIG.js.vendor.what_input)
        .pipe(gulp.dest(CONFIG.js.pub));

    return gulp.src(CONFIG.js.vendor.foundation)
      // .pipe(babel({"presets": ["es2015"]}))
      .pipe(sourcemaps.write("."))
      // .pipe(concat('foundation.js'))
      .pipe(gulp.dest(CONFIG.js.pub));

});
