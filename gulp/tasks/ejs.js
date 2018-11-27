const _         = require("../plugin");
const dir       = require("../dir");
const functions = require("../functions");

//ejs
_.gulp.task("ejs", () => {
    const config = functions.getConfig(dir.config.config);
    const commonVar = functions.getConfig(dir.config.commonvar);

    return _.gulp.src(
        [`${dir.src.ejs}/**/*.ejs`, `!${dir.src.ejs}/**/_*.ejs`] //_*.ejs(パーツ)はhtmlにしない
    )
    .pipe(_.plumber())
    .pipe(_.data((file) => {
        return { "filename": file.path }
    }))
    .pipe(_.ejs({ config, commonVar }))
    .pipe(_.rename({ extname: ".html" }))
    .pipe(_.gulp.dest(dir.dist.html));
});