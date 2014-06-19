var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var rename = require('gulp-rename');

gulp.task('conc&less', function() {
	return gulp.src('components/less/bootstrap.less')
		.pipe(less({
			paths: ['components/less']
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('css/'))
		.pipe(notify('All done master!'));
});

gulp.task('default', function() {
	gulp.run('conc&less');

	gulp.watch('css/*.css', function() {
		gulp.run('conc&less');
	});
});

gulp.task('mystyle', function() {
	return gulp.src('components/less/_mystyle.less')
		.pipe(less())
		.pipe(rename( {
					basename: 'mystyle'
					}))
		.pipe(minifycss())
		.pipe(gulp.dest('css/'))
		.pipe(notify('mystyle ready master!'));
});

gulp.task('jscon', function() {
	return gulp.src(['components/js/jquery.js',
									'components/js/affix.js', 
									'components/js/transition.js', 
									'components/js/tooltip.js',
									'components/js/alert.js',
									'components/js/button.js',
									'components/js/carousel.js',
									'components/js/collapse.js',
									'components/js/dropdown.js',
									'components/js/modal.js',
									'components/js/popover.js',
									'components/js/scrollspy.js',
									'components/js/tab.js'])
		.pipe(concat('_bootstrap.js'))
		.pipe(gulp.dest('components/js'))
		.pipe(notify('_bootstrap.js ready master!'))
		.pipe(uglify())
		.pipe(rename({
			basename: "bootstrap"
		}))
		.pipe(gulp.dest('js/'))
		.pipe(notify('bootstrap.js ready master!'));
});

gulp.task('myscript', function() {
	return gulp.src('components/js/_myscript.js')
		.pipe(uglify())
		.pipe(rename( {
					basename: 'myscript'
					}))
		.pipe(gulp.dest('js/'))
		.pipe(notify('myscript.js ready master!'));
});