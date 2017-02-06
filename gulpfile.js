var gulp = require('gulp');
var foreach = require('gulp-foreach');
var modify = require('gulp-modify');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var pact = require('pug-react-compiler');
var pug = require('gulp-pug');

var siteSettings = require('./config/site.json');

gulp.task('compile-pug-react', function() {
	return gulp.src('src/components/**/*.pug')
	.pipe(foreach(function(stream, file) {
		return stream.pipe(modify({
			fileModifier: function(file, contents) {
				var out = "/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */\n"
				+ "import React from 'react';\n";

				try {
					s = pact.compileClient(contents);
					s = s.replace(/(?:var ){0,1}(.+?) = require\((.+?)\)/g, 'import $1 from $2;');
					out += s;
				} catch (e) {
					console.log("Problem in "+file.path+".");
					console.log(e.stack);
				}

				return out;

			}
		}))
		.pipe(rename(function (path) {
			path.extname = ".pug.js"
		}));
	}))
	.pipe(gulp.dest('src/components'));
});

gulp.task('compile-sass', function () {
	return gulp.src('./src/style/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./src/style'));
});

gulp.task('compile-pug-public', function() {
	return gulp.src('./src/public/index.pug')
	.pipe(pug({
		'data': siteSettings
	}))
	.pipe(gulp.dest('./public/'));
});

gulp.task('watch', function() {
	gulp.watch(['src/components/**/*.pug'], ['compile-pug-react']);
	gulp.watch(['src/public/**/*.pug'], ['compile-pug-public']);
	gulp.watch(['src/style/**/*.scss'], ['compile-sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('build', ['compile-pug-public', 'compile-pug-react', 'compile-sass']);
gulp.task('default', ['build', 'watch']);