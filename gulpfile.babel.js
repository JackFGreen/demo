import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
// import pngquant from 'imagemin-pngquant';

const $ = gulpLoadPlugins();

const dist_root = 'dist/';

//压缩图片
/*gulp.task('compress-image', () => {
    return gulp.src(dist_root + 'images/*')
        .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }], //不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest(dist_root + 'img/'));
});*/


//压缩css
gulp.task('css', () => {
    return gulp.src(dist_root + 'css/*.css')
        // .pipe($.cssnano())
        .pipe($.minifyCss())
        .pipe(gulp.dest(dist_root+'css/min/'));
});


gulp.task('default', [
    // 'compress-image'
    'css'
]);
