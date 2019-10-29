const _         = require('../plugin');
const dir       = require('../dir');

//md
const md = () => {
    return _.gulp.src(`${dir.contents.dir}/**/*`)
        .pipe(_.plumber())
        .pipe(_.gulp.dest(dir.dist.md));
};

module.exports = md;