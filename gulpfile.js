gulp.task('deploy', ['default'], () => {
    return gulp.src('dist/**/*')
        .pipe($.ghPages());
});