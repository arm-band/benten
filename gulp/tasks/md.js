const _         = require('../plugin');
const dir       = require('../dir');

//md
const md = () => {
    return _.gulp.src(`${dir.contents.dir}/**/*`)
        .pipe(_.plumber({
            errorHandler: _.notify.onError({
                message: 'Error: <%= error.message %>',
                title: 'markdown'
            })
        }))
        .pipe(_.gulp.dest(dir.dist.md));
};

module.exports = md;
