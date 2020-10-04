const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");


gulp.task("scss-compile", function () {
    return gulp.src("./scss/**/*.scss", "./scss/**/*.sass")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./css/"))
})
gulp.task("watch", function () {
    gulp.watch("./scss/**/*.scss", gulp.series("scss-compile"))
})