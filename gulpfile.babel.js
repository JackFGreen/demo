import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import gifsicle from 'imagemin-gifsicle';

import webpack from 'webpack';

const $ = gulpLoadPlugins();

const dev_root = './src/';

//压缩图片
gulp.task('compress-image', () => {
    return gulp.src(dev_root + 'images/**/*.*')

        .pipe($.cache($.imagemin([
            mozjpeg({
                progressive: true,
                quality: 65
            }),
            pngquant({
                quality: "65-90",
                speed: 4
            }),
            gifsicle({
                interlaced: true,
                colors: 64,
                optimizationLevel: 3
            })
        ])))
        .pipe(gulp.dest(dev_root + 'images/'));
});

//webpack
gulp.task('webpack-dev', $.shell.task([
    'webpack-dev-server --config build/webpack.dev.js --port 8888 --inline --no-info --progress --colors'
]));

gulp.task('webpack-build', ['compress-image'], $.shell.task([
    'webpack --config build/webpack.build.js --no-info --progress --colors'
]));



gulp.task('default', [
    'webpack-dev'
]);

gulp.task('build', [
    'compress-image',
    'webpack-build'
]);
