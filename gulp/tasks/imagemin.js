const _         = require('../plugin');
const dir       = require('../dir');

//画像圧縮
 const imagemin = () => {
    return _.gulp.src(`${dir.src.img}/**/*.+(jpg|jpeg|png|gif|svg)`)
        .pipe(_.plumber({
            errorHandler: _.notify.onError({
                message: 'Error: <%= error.message %>',
                title: 'imageminify'
            })
        }))
        .pipe(_.imagemin([
            _.imageminPng({
                quality: [.8, .9],
                speed: 1
            }),
            _.imageminJpeg({
                quality: 90
            }),
            _.imageminSvg(),
            _.imageminGif()
          ]))
        .pipe(_.gulp.dest(dir.dist.img));
};

module.exports = imagemin;
