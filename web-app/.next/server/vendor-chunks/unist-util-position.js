"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-position";
exports.ids = ["vendor-chunks/unist-util-position"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-position/index.js":
/*!***************************************************!*\
  !*** ./node_modules/unist-util-position/index.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\n\nvar start = factory('start')\nvar end = factory('end')\n\nmodule.exports = position\n\nposition.start = start\nposition.end = end\n\nfunction position(node) {\n  return {start: start(node), end: end(node)}\n}\n\nfunction factory(type) {\n  point.displayName = type\n\n  return point\n\n  function point(node) {\n    var point = (node && node.position && node.position[type]) || {}\n\n    return {\n      line: point.line || null,\n      column: point.column || null,\n      offset: isNaN(point.offset) ? null : point.offset\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVmaW5lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi9pbmRleC5qcz8xYTc5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgc3RhcnQgPSBmYWN0b3J5KCdzdGFydCcpXG52YXIgZW5kID0gZmFjdG9yeSgnZW5kJylcblxubW9kdWxlLmV4cG9ydHMgPSBwb3NpdGlvblxuXG5wb3NpdGlvbi5zdGFydCA9IHN0YXJ0XG5wb3NpdGlvbi5lbmQgPSBlbmRcblxuZnVuY3Rpb24gcG9zaXRpb24obm9kZSkge1xuICByZXR1cm4ge3N0YXJ0OiBzdGFydChub2RlKSwgZW5kOiBlbmQobm9kZSl9XG59XG5cbmZ1bmN0aW9uIGZhY3RvcnkodHlwZSkge1xuICBwb2ludC5kaXNwbGF5TmFtZSA9IHR5cGVcblxuICByZXR1cm4gcG9pbnRcblxuICBmdW5jdGlvbiBwb2ludChub2RlKSB7XG4gICAgdmFyIHBvaW50ID0gKG5vZGUgJiYgbm9kZS5wb3NpdGlvbiAmJiBub2RlLnBvc2l0aW9uW3R5cGVdKSB8fCB7fVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmU6IHBvaW50LmxpbmUgfHwgbnVsbCxcbiAgICAgIGNvbHVtbjogcG9pbnQuY29sdW1uIHx8IG51bGwsXG4gICAgICBvZmZzZXQ6IGlzTmFOKHBvaW50Lm9mZnNldCkgPyBudWxsIDogcG9pbnQub2Zmc2V0XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-position/index.js\n");

/***/ })

};
;