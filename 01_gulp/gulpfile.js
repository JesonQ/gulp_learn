//引入gulp模块
const gulp = require('gulp');
// 可读流
let fs = require("fs")
// jshint语法检查
const jshint = require('gulp-jshint')
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