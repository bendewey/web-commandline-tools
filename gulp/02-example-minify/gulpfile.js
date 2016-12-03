'use strict';

var del = require('del');
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

// clean
gulp.task('clean', function () {
    return del.sync(['dist/**/*']);
});


// copy task
gulp.task('copy', ['clean'], function() {
   return gulp.src('app.css')
	  .pipe(gulp.dest('dist'))
	  .pipe(sourcemaps.init())
	  .pipe(cssnano())
	  .pipe(rename('app.min.css'))
	  .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist'));
});
