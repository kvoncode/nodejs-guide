const circle = require("./circle");

const radius = 1;

console.log(`area of the circle with radius ${radius} :`, circle.area(radius));

console.log("module.exports === exports ?", module.exports === exports);
console.log("foo.js is called as main script? :", require.main === module);
console.log("require.main.filename :", require.main.filename);
console.log("__filename :", __filename);
console.log("require.resolve :", require.resolve);
