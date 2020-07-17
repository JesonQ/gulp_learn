"use strict";

var _m = require("./m1");

require("../less/test1.less");

require("../less/test2.less");

// 导入m1
console.log(_m.name); // console.log(a)
// let age = 7;
// if(age === 7){
//   console.log("正确")
// }

$("body").css("background", "red"); // 引入less