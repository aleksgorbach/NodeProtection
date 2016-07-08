var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var ts = require('gulp-typescript');

var styles = [
    'client/styles/**/*.css',
    'bower_components/bootstrap/dist/css/bootstrap.css',
    'bower_components/bootstrap/dist/css/bootstrap-theme.css'
]

var tsProject = ts.createProject("tsconfig.json")

gulp.task('live-server', function () {
    var server = new LiveServer('server/main.js');
    server.start();
});

gulp.task('lib:css', function () {
    gulp
        .src(styles)
        .pipe(gulp.dest('./client/wwwroot/css/'));
});

gulp.task('lib:js', function () {
    
});

gulp.task('serve', ['lib:css', 'ts', 'live-server'], function () {
    browserSync.init(null, {
        proxy: "http://localhost:7777",
        port: 5000
    });
});

/*gulp.task('bundle', function () {
    return browserify({
        entries: 'client/app/main.jsx',
        debug: true
    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./client/wwwroot/js/'));
})*/

gulp.task('ts', function () {
    return tsProject
        .src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest('./client/wwwroot/js/'));
})


