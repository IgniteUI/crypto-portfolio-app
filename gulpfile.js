var gulp = require('gulp'); 
const fs = require("fs");

gulp.task('build-site', () => {
    gulp.src(['dist/**/*', '!dist/**/index*/',])
        .pipe(gulp.dest('docs'));
});

gulp.task("overwrite-package-json", (done) => {
    const packagesPaths = ["./node_modules/igniteui-angular-charts/package.json", "./node_modules/igniteui-angular-core/package.json"];
    packagesPaths.forEach((packagePath) => {
        const package = require(packagePath);
        fs.writeFileSync(packagePath, JSON.stringify(package));
    });
    done();
});