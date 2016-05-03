var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');  
var buffer = require('vinyl-buffer');

gulp.task('default',function(){
     return browserify('src/index.js')
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer()) 
    .pipe(gulp.dest('www/js'));
});

