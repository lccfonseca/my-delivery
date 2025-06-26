/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/warn-once";
exports.ids = ["vendor-chunks/warn-once"];
exports.modules = {

/***/ "(ssr)/./node_modules/warn-once/index.js":
/*!*****************************************!*\
  !*** ./node_modules/warn-once/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("const DEV = \"development\" !== \"production\";\n\nconst warnings = new Set();\n\nfunction warnOnce(condition, ...rest) {\n  if (DEV && condition) {\n    const key = rest.join(\" \");\n\n    if (warnings.has(key)) {\n      return;\n    }\n\n    warnings.add(key);\n    console.warn(...rest);\n  }\n}\n\nmodule.exports = warnOnce;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2Fybi1vbmNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLFlBQVksYUFBb0I7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWZpbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy93YXJuLW9uY2UvaW5kZXguanM/ZDQ0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBERVYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCI7XG5cbmNvbnN0IHdhcm5pbmdzID0gbmV3IFNldCgpO1xuXG5mdW5jdGlvbiB3YXJuT25jZShjb25kaXRpb24sIC4uLnJlc3QpIHtcbiAgaWYgKERFViAmJiBjb25kaXRpb24pIHtcbiAgICBjb25zdCBrZXkgPSByZXN0LmpvaW4oXCIgXCIpO1xuXG4gICAgaWYgKHdhcm5pbmdzLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmluZ3MuYWRkKGtleSk7XG4gICAgY29uc29sZS53YXJuKC4uLnJlc3QpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2Fybk9uY2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/warn-once/index.js\n");

/***/ })

};
;