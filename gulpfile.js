var gulp = require('gulp');
var changed = require('gulp-changed');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

var JS_SRC = 'static/js/*.js';
var JS_DEST = 'static/build';

var CSS_SRC = 'static/scss/*.scss';
var CSS_DEST = 'static/build';


gulp.task('js', function() {
  return gulp.src(JS_SRC)
	.pipe(changed(JS_DEST))
	.pipe(uglify())
	.pipe(gulp.dest(JS_DEST));
});

gulp.task('sass', function(){
	return gulp.src(CSS_SRC)
		.pipe(sass)
		.pipe(gulp.dest(CSS_DEST));
})

gulp.task('default', ['js', 'sass'])

