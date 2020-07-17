(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 分别暴露
var name = exports.name = "guigu";

var name1 = exports.name1 = "guigu1";
},{}],2:[function(require,module,exports){
"use strict";

var _m = require("./m1");

// console.log(name)
console.log(_m.name);

// 统一暴露
// import * as m2 from "./m2"
// import {m2Name} from "./m2"
// console.log(m2)
// console.log(m2Name)

// 默认暴露
// import * as m3 from "./m3"
// import {default as m3} from "./m3"
// import m3 from "./m3"
// console.log(m3)
// 分别暴露  通用导入
// import * as m1 from "./m1"
},{"./m1":1}]},{},[2]);
