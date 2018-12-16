// do zainstanowania za pomocą komendy np. npm install --save-dev gulp-jshint

var gulp = require('gulp');
//Js Hint
// var jshint = require('gulp-jshint');
//Kompiluje sassa
var sass = require('gulp-sass');
//Autoodświeżanie
var browserSync = require('browser-sync');
//Autoprefixy
var autoprefixer = require('gulp-autoprefixer');
//Mapa
var sourcemaps = require('gulp-sourcemaps');
//Obsługa błędów
var errorHandler = require('gulp-error-handle');



gulp.task('sass', function() {

    return gulp.src('./scss/main.scss') //Wejście
        .pipe(errorHandler()) // Obsługa błędów
        .pipe(sourcemaps.init()) //Rozpoczynam sourcemap
        .pipe(sass({
            outputStyle: 'expanded' //'nested' , 'compact', 'compressed'
        })) // Kompiluje sassa

        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })) //Dodaję prefixy
        .pipe(sourcemaps.write()) //Zapisje mapę


        .pipe(gulp.dest('./css')) //Zapisuje do katalogu css
        .pipe(browserSync.stream()); // Odpalam stream do browser-sync

});



gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    }); // Startuje server z głównego katalogu

    gulp.watch("scss/**/*.scss", ['sass']); // Obserwuj katalog scss
    gulp.watch("*.html").on('change', browserSync.reload); //Obserwuj zmiany w index.html
});



gulp.task('watch', function() {
    gulp.watch('./scss/**/*,scss', ['sass']);
});