/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-strikethrough";
exports.ids = ["vendor-chunks/mdast-util-gfm-strikethrough"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-strikethrough/from-markdown.js":
/*!********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/from-markdown.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.canContainEols = ['delete']\nexports.enter = {strikethrough: enterStrikethrough}\nexports.exit = {strikethrough: exitStrikethrough}\n\nfunction enterStrikethrough(token) {\n  this.enter({type: 'delete', children: []}, token)\n}\n\nfunction exitStrikethrough(token) {\n  this.exit(token)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tc3RyaWtldGhyb3VnaC9mcm9tLW1hcmtkb3duLmpzIiwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjtBQUN0QixhQUFhLElBQUk7QUFDakIsWUFBWSxJQUFJOztBQUVoQjtBQUNBLGNBQWMsNkJBQTZCO0FBQzNDOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZmluZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLXN0cmlrZXRocm91Z2gvZnJvbS1tYXJrZG93bi5qcz9hYjVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuY2FuQ29udGFpbkVvbHMgPSBbJ2RlbGV0ZSddXG5leHBvcnRzLmVudGVyID0ge3N0cmlrZXRocm91Z2g6IGVudGVyU3RyaWtldGhyb3VnaH1cbmV4cG9ydHMuZXhpdCA9IHtzdHJpa2V0aHJvdWdoOiBleGl0U3RyaWtldGhyb3VnaH1cblxuZnVuY3Rpb24gZW50ZXJTdHJpa2V0aHJvdWdoKHRva2VuKSB7XG4gIHRoaXMuZW50ZXIoe3R5cGU6ICdkZWxldGUnLCBjaGlsZHJlbjogW119LCB0b2tlbilcbn1cblxuZnVuY3Rpb24gZXhpdFN0cmlrZXRocm91Z2godG9rZW4pIHtcbiAgdGhpcy5leGl0KHRva2VuKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-strikethrough/from-markdown.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/mdast-util-gfm-strikethrough/to-markdown.js":
/*!******************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/to-markdown.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var phrasing = __webpack_require__(/*! mdast-util-to-markdown/lib/util/container-phrasing */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js\")\n\nexports.unsafe = [{character: '~', inConstruct: 'phrasing'}]\nexports.handlers = {delete: handleDelete}\n\nhandleDelete.peek = peekDelete\n\nfunction handleDelete(node, _, context) {\n  var exit = context.enter('emphasis')\n  var value = phrasing(node, context, {before: '~', after: '~'})\n  exit()\n  return '~~' + value + '~~'\n}\n\nfunction peekDelete() {\n  return '~'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tc3RyaWtldGhyb3VnaC90by1tYXJrZG93bi5qcyIsIm1hcHBpbmdzIjoiQUFBQSxlQUFlLG1CQUFPLENBQUMsc0lBQW9EOztBQUUzRSxjQUFjLEtBQUssd0NBQXdDO0FBQzNELGdCQUFnQixJQUFJOztBQUVwQjs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLHdCQUF3QjtBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVmaW5lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tc3RyaWtldGhyb3VnaC90by1tYXJrZG93bi5qcz8xMjExIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBwaHJhc2luZyA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY29udGFpbmVyLXBocmFzaW5nJylcblxuZXhwb3J0cy51bnNhZmUgPSBbe2NoYXJhY3RlcjogJ34nLCBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJ31dXG5leHBvcnRzLmhhbmRsZXJzID0ge2RlbGV0ZTogaGFuZGxlRGVsZXRlfVxuXG5oYW5kbGVEZWxldGUucGVlayA9IHBlZWtEZWxldGVcblxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlKG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgdmFyIGV4aXQgPSBjb250ZXh0LmVudGVyKCdlbXBoYXNpcycpXG4gIHZhciB2YWx1ZSA9IHBocmFzaW5nKG5vZGUsIGNvbnRleHQsIHtiZWZvcmU6ICd+JywgYWZ0ZXI6ICd+J30pXG4gIGV4aXQoKVxuICByZXR1cm4gJ35+JyArIHZhbHVlICsgJ35+J1xufVxuXG5mdW5jdGlvbiBwZWVrRGVsZXRlKCkge1xuICByZXR1cm4gJ34nXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-strikethrough/to-markdown.js\n");

/***/ })

};
;