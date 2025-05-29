"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ccount";
exports.ids = ["vendor-chunks/ccount"];
exports.modules = {

/***/ "(ssr)/./node_modules/ccount/index.js":
/*!**************************************!*\
  !*** ./node_modules/ccount/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = ccount\n\nfunction ccount(source, character) {\n  var value = String(source)\n  var count = 0\n  var index\n\n  if (typeof character !== 'string') {\n    throw new Error('Expected character')\n  }\n\n  index = value.indexOf(character)\n\n  while (index !== -1) {\n    count++\n    index = value.indexOf(character, index + character.length)\n  }\n\n  return count\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2NvdW50L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVmaW5lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY2NvdW50L2luZGV4LmpzP2YyN2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY2NvdW50XG5cbmZ1bmN0aW9uIGNjb3VudChzb3VyY2UsIGNoYXJhY3Rlcikge1xuICB2YXIgdmFsdWUgPSBTdHJpbmcoc291cmNlKVxuICB2YXIgY291bnQgPSAwXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2YgY2hhcmFjdGVyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgY2hhcmFjdGVyJylcbiAgfVxuXG4gIGluZGV4ID0gdmFsdWUuaW5kZXhPZihjaGFyYWN0ZXIpXG5cbiAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgIGNvdW50KytcbiAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoY2hhcmFjdGVyLCBpbmRleCArIGNoYXJhY3Rlci5sZW5ndGgpXG4gIH1cblxuICByZXR1cm4gY291bnRcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ccount/index.js\n");

/***/ })

};
;