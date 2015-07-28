var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');
    prefix = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('default', ['process-scripts', 'process-styles'], function(){
	console.log("I'm running the default task!")
});

gulp.task('process-styles', function() {
	return sass("sass/application.scss", { style: "expanded" })
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
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'))
})

gulp.task('watch', function(e){
  gulp.watch('sass/application.scss', ['process-styles'])
  gulp.watch('src/javascripts/*.js', ['process-scripts'])

})