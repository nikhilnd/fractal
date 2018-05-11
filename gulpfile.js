var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('js', function() {
  gulp.src('src/js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist'));
});

gulp.task('server', function() {
  connect.server({
    port: 3000
  });
});

gulp.task('watch', function() {
  gulp.watch('src/js/app.js', ['js']);
  gulp.watch('src/css/main.css', ['css']);
});

gulp.task('default', ['js', 'css', 'server', 'watch']);
