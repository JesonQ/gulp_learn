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
// 压缩js
const uglify = require('gulp-uglify');
// 编译less文件
const less = require('gulp-less');
// 扩展前缀
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
// 合并css
const concat = require('gulp-concat');
// 压缩css
const cssmin = require('gulp-cssmin');
// 压缩html
const htmlmin = require('gulp-htmlmin');
// 自动化配置
const livereload = require('gulp-livereload');
// 建立服务连接
const connect = require('gulp-connect');
// 自动打开浏览器
const opn = require('opn');


//定义任务
// gulp.task('default',async function(cb) {
//   // 将你的任务的任务代码放在这
//   // return fs.createReadStream("./package.json")
//   // cb()
// });
// jshint语法检查
gulp.task('jshint', function() {
  // 将你的任务的任务代码放在这
  return gulp.src('./src/js/*.js')  // 检查哪些文件
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(livereload());
});
// babel语法转换
gulp.task('babel', () => {
  return gulp.src('./src/js/*.js')
      .pipe(babel({ //进行语法转换
          presets: ['@babel/env']
      })).pipe(gulp.dest('build/js'))//输出到指定目录
      .pipe(livereload());
});
// 转换为浏览器可识别的代码
gulp.task('browserify', function() {
  return gulp.src('./build/js/main.js')
    .pipe(browserify())					//将CommonJs语法转换为浏览器能识别的语法
    .pipe(rename('built.js'))			//为了防止冲突将文件重命名
    .pipe(gulp.dest('build/js'))		//输出到指定位置
    .pipe(livereload());
});
// 执行多个任务
// gulp.task('default', gulp.series('jshint', 'babel', 'browserify'));
// 压缩js
gulp.task('uglify', function () {
  return gulp.src('build/js/built.js')
    .pipe(uglify())  //压缩js
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload());
});
// less前缀
gulp.task('less', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less({
      plugins: [autoprefix]//自动扩展前缀
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload());
});
// 合并css
gulp.task('concat', function () {
  return gulp.src('./build/css/*.css')
      .pipe(concat('built.css'))
      .pipe(gulp.dest('./build/css/concat'))
      .pipe(livereload());
});
// 压缩css
gulp.task('cssmin', function () {
  return gulp.src('build/css/concat/built.css')
      .pipe(cssmin())
      .pipe(rename('dist.min.css'))
      .pipe(gulp.dest('dist/css'))
      .pipe(livereload());
});
// 压缩html
gulp.task('htmlmin', () => {
  return gulp.src('src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true ,//去除空格
      removeComments:true //去除注释
    }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});
// 自动化配置
//1. 在所有可能要执行任务后面加上 .pipe(livereload());
gulp.task('watch', function () {
  //2. 启动热加载服务
  livereload.listen();
  //3. 通过自己服务器打开项目，自动刷新
  connect.server({
      root: 'dist',
      port: 3000,
      livereload: true  // 自动刷新
  });
  //3. 自动打开浏览器
  opn('http://localhost:3000/index.html');
  //4. 监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
  gulp.watch('./src/less/*.less', gulp.series(['less', 'concat', 'cssmin']));
  gulp.watch('./src/js/*.js', gulp.series(['jshint', 'babel', 'browserify', 'uglify']));
  gulp.watch('./src/index.html', gulp.series('htmlmin'));
});