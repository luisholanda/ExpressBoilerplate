/**
 * @Author: Luis Holanda <luiscm>
 * @Date:   12-Aug-2017
 * @Email:  luiscmholanda@gmail.com
 * @Last modified by:   luiscm
 * @Last modified time: 22-Aug-2017
 */


var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var minify = require('gulp-uglify')
var ts = require('gulp-typescript')


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

// Compile TypeScript
gulp.task('ts', function () {
  gulp.src('src/**/*.ts')
      .pipe(ts({
          "target": "es5",
          "moduleResolution": "node"
      }))
      .js.pipe(gulp.dest('dist'))

  gulp.src('src/views/**/*')
      .pipe(gulp.dest('dist/views'))
})
