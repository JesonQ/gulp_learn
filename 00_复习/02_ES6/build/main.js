"use strict";

var _m = require("./m1");

var _m2 = require("./m3");

var _m3 = _interopRequireDefault(_m2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {name} from "./m1"
// console.log(name)
console.log(_m.name);

// 统一暴露
// import * as m2 from "./m2"
// import {m2Name} from "./m2"
// console.log(m2)
// console.log(m2Name)

// 默认暴露
// import * as m3 from "./m3"
// 分别暴露  通用导入
// import * as m1 from "./m1"

console.log(_m3.default.default.m3);
// import m3 from "./m3"
// console.log(m3)