var gulp = require('gulp');
var changed = require('gulp-changed');
var uglify = require('gulp-uglify');

var SRC = 'static/js/*.js';
var DEST = 'static/build';

gulp.task('default', function() {
  return gulp.src(SRC)
	.pipe(changed(DEST))
	.pipe(uglify())
	.pipe(gulp.dest(DEST));
});


