/*
			to use
			npm run build
*/


// this gulp is set to avoid installing gulp globally
// http://stackoverflow.com/questions/33018779/using-gulp-without-global-gulp-edit-and-without-linking-to-the-bin-js-file
// http://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally


var gulp = require('gulp');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

gulp.task('default', function(){   
	console.log('to use');
	console.log('npm run build');			  
});

// build
gulp.task('build', function(callback){
    runSequence('one', 'two', 'three', callback);
});

gulp.task('one', function(){   
	console.log('one');  
	return gulp.src('./src/**/*.jsx')
		.pipe(babel({
		 	presets: ['es2015']
		}))
        .pipe(concat('start.js'))
        .pipe(gulp.dest('./build/prod'));

});
gulp.task('two', function(){   
	console.log('two');  
});
gulp.task('three', function(){   
	console.log('three');  
});

gulp.start.apply(gulp, ['default']);