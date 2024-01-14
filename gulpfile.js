//import sass, gulp, gulp-sass
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    // 1 - Recuperando todos os arquivos com a extençao .scss
    return gulp.src('./src/styles/*.scss')
    // 2 -  Estilo de saida do sass = comprimindo
    .pipe(sass({outputStyle: 'compressed'}))
    // 3 - Enviando os arquivos prontos para o destino
    .pipe(gulp.dest('./dist/css'));
};


// Exportando a função
exports.default = styles;

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
};