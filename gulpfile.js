/**
 * gulp task
 *
 * @author    アルム＝バンド
 * @copyright Copyright (c) アルム＝バンド
 */
/* require
*************************************** */
const _         = require('./gulp/plugin');
const browsersync = require('./gulp/tasks/browsersync');
const ejs = require('./gulp/tasks/ejs');
const md = require('./gulp/tasks/md');
const imagemin = require('./gulp/tasks/imagemin');
const scssTask = require('./gulp/tasks/sass');
const scss = _.gulp.series(scssTask.yaml2sass, scssTask.sass);

const taskServer = _.gulp.series(browsersync);
exports.server = taskServer;
//Scss
exports.yaml2sass = _.gulp.series(scssTask.yaml2sass);
exports.sass = _.gulp.series(scssTask.sass);
exports.scss = scss;
//ejs
exports.ejs = _.gulp.parallel(ejs);
//image
exports.imagemin = _.gulp.parallel(imagemin);

const taskBuild = _.gulp.parallel(scss, ejs, md, imagemin);
exports.build = taskBuild;

//ビルドなし
exports.view = taskServer;
//gulpのデフォルトタスクで諸々を動かす
exports.default = _.gulp.series(taskBuild, taskServer);