const _         = require('../plugin');
const dir       = require('../dir');
const functions = require('../functions');

//ejs
const ejs = () => {
    const config = functions.getConfig(dir.config.config);
    const commonVar = functions.getConfig(dir.config.commonvar);
    const NLCflag = functions.getContents('slide.md'); //簡易改行コード判定。\r\nならばt, それ以外はf
    let newLineCode = "\\n";
    if(NLCflag) {
        newLineCode = "\\r\\n";
    }
    //改行コードを\r\nか\nのみか判定して代入、使用
    const separator = `^${newLineCode}---${newLineCode}$`;
    const separatorVertical = `^${newLineCode}>>>${newLineCode}$`;

    return _.gulp.src(
        `${dir.src.ejs}/**/*.ejs`,
        {
            ignore: `${dir.src.ejs}/**/_*.ejs` //_*.ejs(パーツ)はhtmlにしない
        }
    )
    .pipe(_.plumber({
        errorHandler: _.notify.onError({
            message: 'Error: <%= error.message %>',
            title: 'ejs'
        })
    }))
    .pipe(_.data((file) => {
        return { 'filename': file.path }
    }))
    .pipe(_.ejs({ config, commonVar, separator, separatorVertical }))
    .pipe(_.rename({ extname: '.html' }))
    .pipe(_.gulp.dest(dir.dist.html));
};

module.exports = ejs;
