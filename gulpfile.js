var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var sourceFiles = ['src/*.scss'];

gulp.task('watch-sass', function () {
	gulp.watch(sourceFiles, ['sass']);
});

gulp.task('sass', function () {
  return gulp.src(sourceFiles)
	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('.', { sourceRoot: '../src/' }))
    .pipe(gulp.dest('dist/lib/owl2/assets/'));
});

gulp.task('default', ['sass', 'watch-sass']);