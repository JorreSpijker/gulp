var gulp = require('gulp');
var config = require('../config.js');

gulp.task('intro', function() {
    console.log("");
    console.log("           Projectnaam: ", config.projectname);
    console.log("           Version: ", config.version);
    console.log("           Run 'gulp go' for realtime changing and compiling.");
    console.log("           Run 'gulp publish' for a distribution ready product.");
    console.log("");
});
