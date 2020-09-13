module.exports = {
    gulp:  require('gulp'),
    plumber: require('gulp-plumber'),
    notify: require('gulp-notify'),
    yaml: require('yaml'),
    sass:  require('gulp-sass'),
    autoprefixer: require('gulp-autoprefixer'),
    imagemin: require('gulp-imagemin'),
    imageminJpeg: require('imagemin-mozjpeg'),
    imageminPng: require('imagemin-pngquant'),
    imageminGif: require('imagemin-gifsicle'),
    imageminSvg: require('imagemin-svgo'),
    rename: require('gulp-rename'),
    ejs: require('gulp-ejs'),
    data: require('gulp-data'),
    fs: require('fs'),
    browserSync: require('browser-sync').create()
};
