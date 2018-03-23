var gulp = require('gulp'),  
    sass = require('gulp-sass'),//编译
    uglify = require('gulp-uglify'),//压缩js
    rename = require('gulp-rename'),//重命名
    cssnano = require('gulp-cssnano');//压缩css
gulp.task("test",function(){
    console.log("sdagsdg");
});
gulp.task("sass",function(){
	return gulp.src("sas/*.scss").pipe(sass()).pipe(cssnano()).pipe(rename({"suffix":".min"})).pipe(gulp.dest("css"));
})
gulp.task()