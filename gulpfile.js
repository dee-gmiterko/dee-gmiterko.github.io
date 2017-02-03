var gulp = require('gulp');
var foreach = require('gulp-foreach');
var modify = require('gulp-modify');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var pact = require('pug-react-compiler');

gulp.task('compile-pug', function() {
	return gulp.src('src/**/*.pug')
	.pipe(foreach(function(stream, file) {
		return stream.pipe(modify({
			fileModifier: function(file, contents) {
				var out = "/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape */\n"
				+ "import React from 'react';\n";

				try {
					s = pact.compileClient(contents);
					// s = s.replace(/(.+?) = require\((.+?)\)/g, 'var $1 = require($2);');
					s = s.replace(/(.+?) = require\((.+?)\)/g, 'import {$1} from $2;');
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
	.pipe(gulp.dest('src'));
});

gulp.task('compile-sass', function () {
  return gulp.src('./src/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/style'));
});

gulp.task('watch', function() {
	gulp.watch(['src/**/*.pug'], ['compile-pug']);
	gulp.watch(['src/style/**/*.scss'], ['compile-sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('build', ['compile-pug', 'compile-sass']);
gulp.task('default', ['build', 'watch']);