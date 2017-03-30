/**
 * Created by luiscm on 3/30/17.
 */

var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var minify = require('gulp-uglify')

// Minify images
gulp.task('minify-images', function () {
  gulp.src('src/images/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('public/images'))
})

// Minify javascripts
gulp.task('minify-js', function () {
  gulp.src('src/java')
      .pipe(minify())
      .pipe(gulp.dest('public/js'))
})
