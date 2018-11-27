const _         = require("../plugin");
const dir       = require("../dir");

//md
_.gulp.task("md", () => {
    return _.gulp.src(`${dir.contents.dir}/**/*`)
        .pipe(_.plumber())
        .pipe(_.gulp.dest(dir.dist.md));
});