import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import gifsicle from 'imagemin-gifsicle';

const $ = gulpLoadPlugins();

const dist_root = './dist/';
const dev_root = './src/';

//压缩图片
gulp.task('compress-image', () => {
    return gulp.src(dev_root + 'images/**/*.*')

        .pipe($.imagemin([
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
        ]))
        .pipe(gulp.dest(dev_root + 'img/'));
});

gulp.task('default', [
    'compress-image'
]);
