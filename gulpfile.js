//import sass, gulp, gulp-sass
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    // 1 - Recuperando todos os arquivos com a extençao .scss
    return gulp.src('./src/styles/*.scss')
        // 2 -  Estilo de saida do sass = comprimindo
        .pipe(sass({ outputStyle: 'compressed' }))
        // 3 - Enviando os arquivos prontos para o destino
        .pipe(gulp.dest('./dist/css'));
};

function images() {
    // 1 - Recuperando todas as imagens que estiverem dentro da pasta
    return gulp.src('./src/images/**/*')
        // 2 -  executando a função imagemin
        .pipe(imagemin())
        // 3 - Enviando os arquivos prontos para o destino
        .pipe(gulp.dest('./dist/images'));
};



// Exportando a função
exports.default = gulp.parallel(styles, images);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
};