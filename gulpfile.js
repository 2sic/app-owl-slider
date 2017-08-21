var gulp = require('gulp'),
    concat = require("gulp-concat");

var bases = {
    owl: "bower_components/owlcarousel/owl-carousel/",
    src: "src/",
    distLib: "dist/lib/owlcarousel/",
    distApp: "dist/app/"
};


gulp.task("import-library", function () {
    gulp.src([bases.owl + "owl.carousel.min.js"]) 
        .pipe(concat('owl-set.js'))
        .pipe(gulp.dest(bases.distLib));

    gulp.src(bases.owl + "owl.carousel.css")
        .pipe(concat("owl-set.css"))
        .pipe(gulp.dest(bases.distLib));

    gulp.src(bases.owl + "*.@(png|gif)")
        .pipe(gulp.dest(bases.distLib));
});

gulp.task("build-css", function() {
    gulp.src(bases.src + "*.css")
        .pipe(gulp.dest(bases.distApp));
});

gulp.task("default", function() {
    gulp.watch(bases.src + "*.*", ["build-css"]);
});