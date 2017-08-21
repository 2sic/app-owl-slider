var gulp = require('gulp'),
    concat = require("gulp-concat");

var bases = {
    owl: "bower_components/owlcarousel/owl-carousel/",
    src: "assets/",
    distLib: "dist/lib/owl2/assets/"
};


gulp.task("build-css", function() {
    gulp.src(bases.src + "*.css")
        .pipe(gulp.dest(bases.distLib));
});

gulp.task("default", function() {
    gulp.watch(bases.src + "*.*", ["build-css"]);
});