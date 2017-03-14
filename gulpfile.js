// grab our packages
var gulp   = require('gulp'),
    gutil = require('gulp-util');

gulp.task('default', ['copyAngular']);

gulp.task('copyAngular', function() {
	var directorio = "app/public";
  // copy any html files in source/ to public/
  gulp.src('node_modules/angular/angular.js')
  	.pipe(gulp.dest(directorio+'/js'));
  gulp.src('node_modules/angular-route/angular-route.js')
  	.pipe(gulp.dest(directorio+'/js'));
  gulp.src('node_modules/angular-animate/angular-animate.js')
  	.pipe(gulp.dest(directorio+'/js'));
  gulp.src('node_modules/angular-touch/angular-touch.js')
  	.pipe(gulp.dest(directorio+'/js'));
  gulp.src('node_modules/angular-sanitize/angular-sanitize.js')
    .pipe(gulp.dest(directorio+'/js'));   
  gulp.src('node_modules/angular-route/angular-route.js')
    .pipe(gulp.dest(directorio+'/js'));       
  gulp.src('node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js')
    .pipe(gulp.dest(directorio+'/js'));    
  gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest(directorio+'/css'));               
});
