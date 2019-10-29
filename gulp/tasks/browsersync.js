const _         = require('../plugin');
const dir       = require('../dir');
const ejs = require('./ejs');
const md = require('./md');
const imagemin = require('./imagemin');
const scssTask = require('./sass');
const scss = _.gulp.series(scssTask.yaml2sass, scssTask.sass);


//自動リロード
const browsersync = () => {
    _.browserSync({
        server: {
            baseDir: dir.dist.html
        },
        open: 'external',
        https: true
    });

    _.watch(`${dir.src.ejs}/**/*.ejs`, _.gulp.series(ejs, _.browserSync.reload));
    _.watch(`${dir.contents.dir}/**/*.md`, _.gulp.series(md, _.browserSync.reload));
    _.watch([`${dir.src.scss}/**/*.scss`, `!${dir.src.scss}/util/_var.scss`], _.gulp.series(scssTask.sass, _.browserSync.reload));
    _.watch(`${dir.src.img}/**/*.+(jpg|jpeg|png|gif|svg)`, _.gulp.series(imagemin, _.browserSync.reload));
    _.watch(`${dir.config.dir}/**/*.yml`, _.gulp.series(_.gulp.parallel(ejs, scss), _.browserSync.reload));
};

module.exports = browsersync;