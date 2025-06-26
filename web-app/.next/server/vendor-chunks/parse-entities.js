"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/parse-entities";
exports.ids = ["vendor-chunks/parse-entities"];
exports.modules = {

/***/ "(ssr)/./node_modules/parse-entities/decode-entity.js":
/*!******************************************************!*\
  !*** ./node_modules/parse-entities/decode-entity.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar characterEntities = __webpack_require__(/*! character-entities */ \"(ssr)/./node_modules/character-entities/index.json\")\n\nmodule.exports = decodeEntity\n\nvar own = {}.hasOwnProperty\n\nfunction decodeEntity(characters) {\n  return own.call(characterEntities, characters)\n    ? characterEntities[characters]\n    : false\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGFyc2UtZW50aXRpZXMvZGVjb2RlLWVudGl0eS5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWix3QkFBd0IsbUJBQU8sQ0FBQyw4RUFBb0I7O0FBRXBEOztBQUVBLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZmluZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3BhcnNlLWVudGl0aWVzL2RlY29kZS1lbnRpdHkuanM/NmFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxudmFyIGNoYXJhY3RlckVudGl0aWVzID0gcmVxdWlyZSgnY2hhcmFjdGVyLWVudGl0aWVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVFbnRpdHlcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbmZ1bmN0aW9uIGRlY29kZUVudGl0eShjaGFyYWN0ZXJzKSB7XG4gIHJldHVybiBvd24uY2FsbChjaGFyYWN0ZXJFbnRpdGllcywgY2hhcmFjdGVycylcbiAgICA/IGNoYXJhY3RlckVudGl0aWVzW2NoYXJhY3RlcnNdXG4gICAgOiBmYWxzZVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/parse-entities/decode-entity.js\n");

/***/ })

};
;