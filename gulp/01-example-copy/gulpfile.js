'use strict';
var del = require('del');
var gulp = require('gulp');

// clean
gulp.task('clean', function () {
    return del.sync(['dist/**/*']);
});


// copy task
gulp.task('copy', ['clean'], function() {
   return gulp.src('app.css')
      .pipe(gulp.dest('dist'));
});
