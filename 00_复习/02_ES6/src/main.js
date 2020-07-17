// 分别暴露  通用导入
// import * as m1 from "./m1"
import {name as m1Name} from "./m1"
// import {name} from "./m1"
// console.log(name)
console.log(m1Name)

// 统一暴露
// import * as m2 from "./m2"
// import {m2Name} from "./m2"
// console.log(m2)
// console.log(m2Name)

// 默认暴露
// import * as m3 from "./m3"
// import {default as m33} from "./m3"
console.log(m33.default.m3)
// import m3 from "./m3"
// console.log(m3)