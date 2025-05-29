"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-to-string";
exports.ids = ["vendor-chunks/mdast-util-to-string"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-to-string/index.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-to-string/index.js ***!
  \****************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = toString\n\n// Get the text content of a node.\n// Prefer the node’s plain-text fields, otherwise serialize its children,\n// and if the given value is an array, serialize the nodes in it.\nfunction toString(node) {\n  return (\n    (node &&\n      (node.value ||\n        node.alt ||\n        node.title ||\n        ('children' in node && all(node.children)) ||\n        ('length' in node && all(node)))) ||\n    ''\n  )\n}\n\nfunction all(values) {\n  var result = []\n  var index = -1\n\n  while (++index < values.length) {\n    result[index] = toString(values[index])\n  }\n\n  return result.join('')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1zdHJpbmcvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWZpbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLXN0cmluZy9pbmRleC5qcz9mM2Q4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nXG5cbi8vIEdldCB0aGUgdGV4dCBjb250ZW50IG9mIGEgbm9kZS5cbi8vIFByZWZlciB0aGUgbm9kZeKAmXMgcGxhaW4tdGV4dCBmaWVsZHMsIG90aGVyd2lzZSBzZXJpYWxpemUgaXRzIGNoaWxkcmVuLFxuLy8gYW5kIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBhcnJheSwgc2VyaWFsaXplIHRoZSBub2RlcyBpbiBpdC5cbmZ1bmN0aW9uIHRvU3RyaW5nKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICAobm9kZSAmJlxuICAgICAgKG5vZGUudmFsdWUgfHxcbiAgICAgICAgbm9kZS5hbHQgfHxcbiAgICAgICAgbm9kZS50aXRsZSB8fFxuICAgICAgICAoJ2NoaWxkcmVuJyBpbiBub2RlICYmIGFsbChub2RlLmNoaWxkcmVuKSkgfHxcbiAgICAgICAgKCdsZW5ndGgnIGluIG5vZGUgJiYgYWxsKG5vZGUpKSkpIHx8XG4gICAgJydcbiAgKVxufVxuXG5mdW5jdGlvbiBhbGwodmFsdWVzKSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSB0b1N0cmluZyh2YWx1ZXNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-to-string/index.js\n");

/***/ })

};
;