"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/escape-string-regexp";
exports.ids = ["vendor-chunks/escape-string-regexp"];
exports.modules = {

/***/ "(ssr)/./node_modules/escape-string-regexp/index.js":
/*!****************************************************!*\
  !*** ./node_modules/escape-string-regexp/index.js ***!
  \****************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = string => {\n\tif (typeof string !== 'string') {\n\t\tthrow new TypeError('Expected a string');\n\t}\n\n\t// Escape characters with special meaning either inside or outside character sets.\n\t// Use a simple backslash escape when it’s always valid, and a \\unnnn escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.\n\treturn string\n\t\t.replace(/[|\\\\{}()[\\]^$+*?.]/g, '\\\\$&')\n\t\t.replace(/-/g, '\\\\x2d');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXNjYXBlLXN0cmluZy1yZWdleHAvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWZpbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcz82ZmUyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmcgPT4ge1xuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuXHR9XG5cblx0Ly8gRXNjYXBlIGNoYXJhY3RlcnMgd2l0aCBzcGVjaWFsIG1lYW5pbmcgZWl0aGVyIGluc2lkZSBvciBvdXRzaWRlIGNoYXJhY3RlciBzZXRzLlxuXHQvLyBVc2UgYSBzaW1wbGUgYmFja3NsYXNoIGVzY2FwZSB3aGVuIGl04oCZcyBhbHdheXMgdmFsaWQsIGFuZCBhIFxcdW5ubm4gZXNjYXBlIHdoZW4gdGhlIHNpbXBsZXIgZm9ybSB3b3VsZCBiZSBkaXNhbGxvd2VkIGJ5IFVuaWNvZGUgcGF0dGVybnPigJkgc3RyaWN0ZXIgZ3JhbW1hci5cblx0cmV0dXJuIHN0cmluZ1xuXHRcdC5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZywgJ1xcXFwkJicpXG5cdFx0LnJlcGxhY2UoLy0vZywgJ1xcXFx4MmQnKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/escape-string-regexp/index.js\n");

/***/ })

};
;