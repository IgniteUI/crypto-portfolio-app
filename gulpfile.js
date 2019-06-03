var gulp = require('gulp'); 

gulp.task('build-site', () => {
    gulp.src(['dist/**/*', '!dist/**/index*/',])
        .pipe(gulp.dest('docs'));
});