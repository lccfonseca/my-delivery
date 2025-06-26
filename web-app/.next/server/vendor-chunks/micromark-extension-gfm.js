/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm";
exports.ids = ["vendor-chunks/micromark-extension-gfm"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-extension-gfm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromark-extension-gfm/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./syntax */ \"(ssr)/./node_modules/micromark-extension-gfm/syntax.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsOEdBQW9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVmaW5lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0vaW5kZXguanM/NjAyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3ludGF4JylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-extension-gfm/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/micromark-extension-gfm/syntax.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark-extension-gfm/syntax.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var combine = __webpack_require__(/*! micromark/dist/util/combine-extensions */ \"(ssr)/./node_modules/micromark/dist/util/combine-extensions.js\")\nvar autolink = __webpack_require__(/*! micromark-extension-gfm-autolink-literal */ \"(ssr)/./node_modules/micromark-extension-gfm-autolink-literal/index.js\")\nvar strikethrough = __webpack_require__(/*! micromark-extension-gfm-strikethrough */ \"(ssr)/./node_modules/micromark-extension-gfm-strikethrough/index.js\")\nvar table = __webpack_require__(/*! micromark-extension-gfm-table */ \"(ssr)/./node_modules/micromark-extension-gfm-table/index.js\")\nvar tasklist = __webpack_require__(/*! micromark-extension-gfm-task-list-item */ \"(ssr)/./node_modules/micromark-extension-gfm-task-list-item/index.js\")\n\nmodule.exports = create\n\nfunction create(options) {\n  return combine([autolink, strikethrough(options), table, tasklist])\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0vc3ludGF4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGNBQWMsbUJBQU8sQ0FBQyw4R0FBd0M7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLHdIQUEwQztBQUNqRSxvQkFBb0IsbUJBQU8sQ0FBQyxrSEFBdUM7QUFDbkUsWUFBWSxtQkFBTyxDQUFDLGtHQUErQjtBQUNuRCxlQUFlLG1CQUFPLENBQUMsb0hBQXdDOztBQUUvRDs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWZpbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZXh0ZW5zaW9uLWdmbS9zeW50YXguanM/ZTFjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29tYmluZSA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3V0aWwvY29tYmluZS1leHRlbnNpb25zJylcbnZhciBhdXRvbGluayA9IHJlcXVpcmUoJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLWF1dG9saW5rLWxpdGVyYWwnKVxudmFyIHN0cmlrZXRocm91Z2ggPSByZXF1aXJlKCdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbS1zdHJpa2V0aHJvdWdoJylcbnZhciB0YWJsZSA9IHJlcXVpcmUoJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhYmxlJylcbnZhciB0YXNrbGlzdCA9IHJlcXVpcmUoJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhc2stbGlzdC1pdGVtJylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVcblxuZnVuY3Rpb24gY3JlYXRlKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNvbWJpbmUoW2F1dG9saW5rLCBzdHJpa2V0aHJvdWdoKG9wdGlvbnMpLCB0YWJsZSwgdGFza2xpc3RdKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-extension-gfm/syntax.js\n");

/***/ })

};
;