

// project variables

var srcPath = './src/';
var distPath = './dist/';

var sassIncludePaths = [
	srcPath + 'css/scss'
];


// required variables

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();


// tasks

gulp.task('css', function() {
	return gulp.src(srcPath + 'css/scss/equinox.scss')
		.pipe($.sass({ includePaths: sassIncludePaths })
			.on('error', $.notify.onError({ title: 'SASS Compilation Error', message: '<%= error.message %>' })))
		.pipe($.autoprefixer({ browsers: [ 'last 2 versions', 'ie >= 9' ] }))
		.pipe($.cssnano())
		.pipe(gulp.dest(distPath))
		.pipe($.notify({ title: 'CSS Compiled Successfully', message: '<%= file.relative %>', onLast: true }))
});

gulp.task('js', function() {
	return gulp.src(srcPath + 'js/equinox.js')
		.pipe($.uglify())
		.on('error', $.notify.onError({ title: 'JS Minification Error', message: '<%= error.message %>' }))
		.pipe($.rename({ extname: '.min.js' }))
		.pipe(gulp.dest(distPath))
		.pipe($.notify({ title: 'JS Minified Successfully', message: '<%= file.relative %>' }));
});


// watch tasks

gulp.task('watch', function() {
	gulp.watch(srcPath + 'css/scss/**/*.scss', ['css']);
	gulp.watch(srcPath + 'js/**/*.js', ['js']);
});


// default task

gulp.task('default', ['watch']);