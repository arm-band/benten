const _         = require("../plugin");
const dir       = require("../dir");
const functions = require("../functions");

//自動リロード
_.gulp.task("browsersync", () => {
    _.browserSync({
        server: {
            baseDir: dir.dist.html
        },
        open: "external",
        https: true
    });

    _.watch(`${dir.src.ejs}/**/*.ejs`, _.gulp.series("ejs", _.browserSync.reload));
    _.watch(`${dir.contents.dir}/**/*.md`, _.gulp.series("md", _.browserSync.reload));
    _.watch([`${dir.src.scss}/**/*.scss`, `!${dir.src.scss}/util/_var.scss`], _.gulp.series("sass", _.browserSync.reload));
    _.watch(`${dir.src.img}/**/*.+(jpg|jpeg|png|gif|svg)`, _.gulp.series("imagemin", _.browserSync.reload));
    _.watch(`${dir.config.dir}/**/*.yml`, _.gulp.series(_.gulp.parallel("ejs", "scss"), _.browserSync.reload));
});