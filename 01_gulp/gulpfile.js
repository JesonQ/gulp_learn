//引入gulp模块
const gulp = require('gulp');
// 可读流
let fs = require("fs")
// jshint语法检查
const jshint = require('gulp-jshint')
// babel语法转换
const babel = require('gulp-babel');
// 转换为浏览器可识别代码
const browserify = require('gulp-browserify');
// 重命名
const rename = require('gulp-rename');

//定义任务
gulp.task('default',async function(cb) {
  // 将你的任务的任务代码放在这
  // return fs.createReadStream("./package.json")
  // cb()
});
// jshint语法检查
gulp.task('jshint', function() {
  // 将你的任务的任务代码放在这
  return gulp.src('./src/js/*.js')  // 检查哪些文件
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
// babel语法转换
gulp.task('babel', () => {
  return gulp.src('./src/js/*.js')
      .pipe(babel({ //进行语法转换
          presets: ['@babel/env']
      })).pipe(gulp.dest('build/js'))//输出到指定目录
});
// 转换为浏览器可识别的代码
gulp.task('browserify', function() {
  return gulp.src('./build/js/main.js')
    .pipe(browserify())					//将CommonJs语法转换为浏览器能识别的语法
    .pipe(rename('built.js'))			//为了防止冲突将文件重命名
    .pipe(gulp.dest('build/js'))		//输出到指定位置
});
// 执行多个任务
gulp.task('default', gulp.series('jshint', 'babel', 'browserify'));