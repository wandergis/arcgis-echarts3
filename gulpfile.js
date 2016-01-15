var gulp=require('gulp');
var concat=require('gulp-concat');
var rename=require('gulp-rename');
var uglify=require('gulp-uglify');
var notify=require('gulp-notify');
gulp.task('default', function() {
  //gulp.src(['./libs/echarts.js', './libs/china.js'])
  //  .pipe(concat('main.js'))
  //  .pipe(rename({suffix: '.min'}))
  //  .pipe(uglify())
  //  .pipe(gulp.dest('dist'))
  //  .pipe(notify({ message: 'Scripts common task complete' }));
  gulp.src(['./src/Echarts3Layer.js'])
    .pipe(concat('Echarts3Layer.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('src'))
    .pipe(notify({ message: 'Scripts common task complete' }));
});