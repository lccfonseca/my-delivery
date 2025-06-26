"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-rehype";
exports.ids = ["vendor-chunks/remark-rehype"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-rehype/index.js":
/*!*********************************************!*\
  !*** ./node_modules/remark-rehype/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar mdast2hast = __webpack_require__(/*! mdast-util-to-hast */ \"(ssr)/./node_modules/mdast-util-to-hast/index.js\")\n\nmodule.exports = remark2rehype\n\n// Attacher.\n// If a destination is given, runs the destination with the new hast tree\n// (bridge mode).\n// Without destination, returns the tree: further plugins run on that tree\n// (mutate mode).\nfunction remark2rehype(destination, options) {\n  if (destination && !destination.process) {\n    options = destination\n    destination = null\n  }\n\n  return destination ? bridge(destination, options) : mutate(options)\n}\n\n// Bridge mode.\n// Runs the destination with the new hast tree.\nfunction bridge(destination, options) {\n  return transformer\n\n  function transformer(node, file, next) {\n    destination.run(mdast2hast(node, options), file, done)\n\n    function done(error) {\n      next(error)\n    }\n  }\n}\n\n// Mutate-mode.\n// Further transformers run on the hast tree.\nfunction mutate(options) {\n  return transformer\n\n  function transformer(node) {\n    return mdast2hast(node, options)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLXJlaHlwZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQyw0RUFBb0I7O0FBRTdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVmaW5lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvcmVtYXJrLXJlaHlwZS9pbmRleC5qcz81MjQwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgbWRhc3QyaGFzdCA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8taGFzdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVtYXJrMnJlaHlwZVxuXG4vLyBBdHRhY2hlci5cbi8vIElmIGEgZGVzdGluYXRpb24gaXMgZ2l2ZW4sIHJ1bnMgdGhlIGRlc3RpbmF0aW9uIHdpdGggdGhlIG5ldyBoYXN0IHRyZWVcbi8vIChicmlkZ2UgbW9kZSkuXG4vLyBXaXRob3V0IGRlc3RpbmF0aW9uLCByZXR1cm5zIHRoZSB0cmVlOiBmdXJ0aGVyIHBsdWdpbnMgcnVuIG9uIHRoYXQgdHJlZVxuLy8gKG11dGF0ZSBtb2RlKS5cbmZ1bmN0aW9uIHJlbWFyazJyZWh5cGUoZGVzdGluYXRpb24sIG9wdGlvbnMpIHtcbiAgaWYgKGRlc3RpbmF0aW9uICYmICFkZXN0aW5hdGlvbi5wcm9jZXNzKSB7XG4gICAgb3B0aW9ucyA9IGRlc3RpbmF0aW9uXG4gICAgZGVzdGluYXRpb24gPSBudWxsXG4gIH1cblxuICByZXR1cm4gZGVzdGluYXRpb24gPyBicmlkZ2UoZGVzdGluYXRpb24sIG9wdGlvbnMpIDogbXV0YXRlKG9wdGlvbnMpXG59XG5cbi8vIEJyaWRnZSBtb2RlLlxuLy8gUnVucyB0aGUgZGVzdGluYXRpb24gd2l0aCB0aGUgbmV3IGhhc3QgdHJlZS5cbmZ1bmN0aW9uIGJyaWRnZShkZXN0aW5hdGlvbiwgb3B0aW9ucykge1xuICByZXR1cm4gdHJhbnNmb3JtZXJcblxuICBmdW5jdGlvbiB0cmFuc2Zvcm1lcihub2RlLCBmaWxlLCBuZXh0KSB7XG4gICAgZGVzdGluYXRpb24ucnVuKG1kYXN0Mmhhc3Qobm9kZSwgb3B0aW9ucyksIGZpbGUsIGRvbmUpXG5cbiAgICBmdW5jdGlvbiBkb25lKGVycm9yKSB7XG4gICAgICBuZXh0KGVycm9yKVxuICAgIH1cbiAgfVxufVxuXG4vLyBNdXRhdGUtbW9kZS5cbi8vIEZ1cnRoZXIgdHJhbnNmb3JtZXJzIHJ1biBvbiB0aGUgaGFzdCB0cmVlLlxuZnVuY3Rpb24gbXV0YXRlKG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybWVyXG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtZXIobm9kZSkge1xuICAgIHJldHVybiBtZGFzdDJoYXN0KG5vZGUsIG9wdGlvbnMpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-rehype/index.js\n");

/***/ })

};
;