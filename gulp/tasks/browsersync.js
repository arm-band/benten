const _         = require('../plugin');
const dir       = require('../dir');
const ejs = require('./ejs');
const md = require('./md');
const imagemin = require('./imagemin');
const scssTask = require('./sass');
const scss = _.gulp.series(scssTask.yaml2sass, scssTask.sass);


//自動リロード
const browsersync = () => {
    _.browserSync.init({
        server: {
            baseDir: dir.dist.html
        },
        open: 'external',
        https: true
    });

    const sEjs = _.gulp.series(ejs, _.browserSync.reload);
    _.gulp.watch(
        `${dir.src.ejs}/**/*.ejs`
    )
        .on('add',    sEjs)
        .on('change', sEjs)
        .on('unlink', sEjs);
    const sSlide = _.gulp.series(md, _.browserSync.reload);
    _.gulp.watch(
        `${dir.contents.dir}/**/*.md`
    )
        .on('add',    sSlide)
        .on('change', sSlide)
        .on('unlink', sSlide);
    const sSass = _.gulp.series(scssTask.sass, _.browserSync.reload);
    _.gulp.watch(
        `${dir.src.scss}/**/*.scss`,
        {
            ignored: `${dir.src.scss}/util/_var.scss`
        }
    )
        .on('add',    sSass)
        .on('change', sSass)
        .on('unlink', sSass);
    const sImg = _.gulp.series(imagemin, _.browserSync.reload);
    _.gulp.watch(
        `${dir.src.img}/**/*.+(jpg|jpeg|png|gif|svg)`
    )
        .on('add',    sImg)
        .on('change', sImg)
        .on('unlink', sImg);
    const sBuild = _.gulp.series(_.gulp.parallel(ejs, scss), _.browserSync.reload);
    _.gulp.watch(
        `${dir.config.dir}/**/*.yml`
    )
        .on('add',    sBuild)
        .on('change', sBuild);
};

module.exports = browsersync;
