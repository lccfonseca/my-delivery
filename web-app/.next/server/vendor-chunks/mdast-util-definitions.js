"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-definitions";
exports.ids = ["vendor-chunks/mdast-util-definitions"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-definitions/index.js":
/*!******************************************************!*\
  !*** ./node_modules/mdast-util-definitions/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar visit = __webpack_require__(/*! unist-util-visit */ \"(ssr)/./node_modules/unist-util-visit/index.js\")\n\nmodule.exports = getDefinitionFactory\n\nvar own = {}.hasOwnProperty\n\n// Get a definition in `node` by `identifier`.\nfunction getDefinitionFactory(node, options) {\n  return getterFactory(gather(node, options))\n}\n\n// Gather all definitions in `node`\nfunction gather(node) {\n  var cache = {}\n\n  if (!node || !node.type) {\n    throw new Error('mdast-util-definitions expected node')\n  }\n\n  visit(node, 'definition', ondefinition)\n\n  return cache\n\n  function ondefinition(definition) {\n    var id = normalise(definition.identifier)\n    if (!own.call(cache, id)) {\n      cache[id] = definition\n    }\n  }\n}\n\n// Factory to get a node from the given definition-cache.\nfunction getterFactory(cache) {\n  return getter\n\n  // Get a node from the bound definition-cache.\n  function getter(identifier) {\n    var id = identifier && normalise(identifier)\n    return id && own.call(cache, id) ? cache[id] : null\n  }\n}\n\nfunction normalise(identifier) {\n  return identifier.toUpperCase()\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1kZWZpbml0aW9ucy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsd0VBQWtCOztBQUV0Qzs7QUFFQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWZpbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWRlZmluaXRpb25zL2luZGV4LmpzP2U5OGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERlZmluaXRpb25GYWN0b3J5XG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBHZXQgYSBkZWZpbml0aW9uIGluIGBub2RlYCBieSBgaWRlbnRpZmllcmAuXG5mdW5jdGlvbiBnZXREZWZpbml0aW9uRmFjdG9yeShub2RlLCBvcHRpb25zKSB7XG4gIHJldHVybiBnZXR0ZXJGYWN0b3J5KGdhdGhlcihub2RlLCBvcHRpb25zKSlcbn1cblxuLy8gR2F0aGVyIGFsbCBkZWZpbml0aW9ucyBpbiBgbm9kZWBcbmZ1bmN0aW9uIGdhdGhlcihub2RlKSB7XG4gIHZhciBjYWNoZSA9IHt9XG5cbiAgaWYgKCFub2RlIHx8ICFub2RlLnR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21kYXN0LXV0aWwtZGVmaW5pdGlvbnMgZXhwZWN0ZWQgbm9kZScpXG4gIH1cblxuICB2aXNpdChub2RlLCAnZGVmaW5pdGlvbicsIG9uZGVmaW5pdGlvbilcblxuICByZXR1cm4gY2FjaGVcblxuICBmdW5jdGlvbiBvbmRlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIHZhciBpZCA9IG5vcm1hbGlzZShkZWZpbml0aW9uLmlkZW50aWZpZXIpXG4gICAgaWYgKCFvd24uY2FsbChjYWNoZSwgaWQpKSB7XG4gICAgICBjYWNoZVtpZF0gPSBkZWZpbml0aW9uXG4gICAgfVxuICB9XG59XG5cbi8vIEZhY3RvcnkgdG8gZ2V0IGEgbm9kZSBmcm9tIHRoZSBnaXZlbiBkZWZpbml0aW9uLWNhY2hlLlxuZnVuY3Rpb24gZ2V0dGVyRmFjdG9yeShjYWNoZSkge1xuICByZXR1cm4gZ2V0dGVyXG5cbiAgLy8gR2V0IGEgbm9kZSBmcm9tIHRoZSBib3VuZCBkZWZpbml0aW9uLWNhY2hlLlxuICBmdW5jdGlvbiBnZXR0ZXIoaWRlbnRpZmllcikge1xuICAgIHZhciBpZCA9IGlkZW50aWZpZXIgJiYgbm9ybWFsaXNlKGlkZW50aWZpZXIpXG4gICAgcmV0dXJuIGlkICYmIG93bi5jYWxsKGNhY2hlLCBpZCkgPyBjYWNoZVtpZF0gOiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXNlKGlkZW50aWZpZXIpIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIudG9VcHBlckNhc2UoKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-definitions/index.js\n");

/***/ })

};
;