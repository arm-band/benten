/**
 * gulp task
 *
 * @author    アルム＝バンド
 * @copyright Copyright (c) アルム＝バンド
 */
/* require
*************************************** */
const _         = require("./gulp/plugin");

/* requireDri Execution
*************************************** */
_.requireDir("./tasks", { recurse: true });

_.gulp.task("server", _.gulp.series("browsersync"));
_.gulp.task("build", _.gulp.parallel(_.gulp.series("yaml2sass", "sass"), "ejs", "md", "imagemin"));

//最初のタスク
_.gulp.task("init", _.gulp.series("build", "server"));
//gulpのデフォルトタスクで諸々を動かす
_.gulp.task("default", _.gulp.series("server"));