var gulp   = require('gulp');
var uncss  = require('gulp-uncss');
var csso   = require('gulp-csso');

gulp.task('uncss', function() {
  return gulp.src('build/assets/stylesheets/**/*.css')
    .pipe(uncss({
        html: ['build/**/*.html']
    }))
    .pipe(csso())
    .pipe(gulp.dest('./build/assets/stylesheets'))
});

// Scan site, minify css and then remove unused css
gulp.task('default', ['uncss']);
