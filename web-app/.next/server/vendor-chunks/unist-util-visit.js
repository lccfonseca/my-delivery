"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit";
exports.ids = ["vendor-chunks/unist-util-visit"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-visit/index.js":
/*!************************************************!*\
  !*** ./node_modules/unist-util-visit/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nmodule.exports = visit\n\nvar visitParents = __webpack_require__(/*! unist-util-visit-parents */ \"(ssr)/./node_modules/unist-util-visit-parents/index.js\")\n\nvar CONTINUE = visitParents.CONTINUE\nvar SKIP = visitParents.SKIP\nvar EXIT = visitParents.EXIT\n\nvisit.CONTINUE = CONTINUE\nvisit.SKIP = SKIP\nvisit.EXIT = EXIT\n\nfunction visit(tree, test, visitor, reverse) {\n  if (typeof test === 'function' && typeof visitor !== 'function') {\n    reverse = visitor\n    visitor = test\n    test = null\n  }\n\n  visitParents(tree, test, overload, reverse)\n\n  function overload(node, parents) {\n    var parent = parents[parents.length - 1]\n    var index = parent ? parent.children.indexOf(node) : null\n    return visitor(node, index, parent)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjs7QUFFQSxtQkFBbUIsbUJBQU8sQ0FBQyx3RkFBMEI7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZmluZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQvaW5kZXguanM/NmY5OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB2aXNpdFxuXG52YXIgdmlzaXRQYXJlbnRzID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJylcblxudmFyIENPTlRJTlVFID0gdmlzaXRQYXJlbnRzLkNPTlRJTlVFXG52YXIgU0tJUCA9IHZpc2l0UGFyZW50cy5TS0lQXG52YXIgRVhJVCA9IHZpc2l0UGFyZW50cy5FWElUXG5cbnZpc2l0LkNPTlRJTlVFID0gQ09OVElOVUVcbnZpc2l0LlNLSVAgPSBTS0lQXG52aXNpdC5FWElUID0gRVhJVFxuXG5mdW5jdGlvbiB2aXNpdCh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgdmlzaXRvciA9IHRlc3RcbiAgICB0ZXN0ID0gbnVsbFxuICB9XG5cbiAgdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIG92ZXJsb2FkLCByZXZlcnNlKVxuXG4gIGZ1bmN0aW9uIG92ZXJsb2FkKG5vZGUsIHBhcmVudHMpIHtcbiAgICB2YXIgcGFyZW50ID0gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdXG4gICAgdmFyIGluZGV4ID0gcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSkgOiBudWxsXG4gICAgcmV0dXJuIHZpc2l0b3Iobm9kZSwgaW5kZXgsIHBhcmVudClcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit/index.js\n");

/***/ })

};
;