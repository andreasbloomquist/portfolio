var gulp = require('gulp'),
    sass = require('gulp-sass');
    prefix = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('default', function(){
	console.log("I'm running the default task!")
});

gulp.task('process-styles', function() {
	return gulp.src('./sass/*.scss', { style: "expanded" })
	  .pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix(['last 2 version']))
    .pipe(gulp.dest("public/stylesheets"))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest("public/stylesheets"))
})

gulp.task('process-scripts', function(){
  return gulp.src('src/javascripts/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/javascripts'))
    .pipe(rename({suffix: '.min'}))
    // .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'))
})