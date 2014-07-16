var gulp = require('gulp');
var changed = require('gulp-changed');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');

var SRC = 'static/js/*.js';
var DEST = 'static/build';

gulp.task('default', function() {
  return gulp.src(SRC)
	.pipe(changed(DEST))
	.pipe(jscs())
	.pipe(uglify())
	.pipe(gulp.dest(DEST))
});


