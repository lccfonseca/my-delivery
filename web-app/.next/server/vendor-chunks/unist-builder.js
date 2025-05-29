"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-builder";
exports.ids = ["vendor-chunks/unist-builder"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-builder/index.js":
/*!*********************************************!*\
  !*** ./node_modules/unist-builder/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = u\n\nfunction u(type, props, value) {\n  var node\n\n  if (\n    (value === null || value === undefined) &&\n    (typeof props !== 'object' || Array.isArray(props))\n  ) {\n    value = props\n    props = {}\n  }\n\n  node = Object.assign({type: String(type)}, props)\n\n  if (Array.isArray(value)) {\n    node.children = value\n  } else if (value !== null && value !== undefined) {\n    node.value = String(value)\n  }\n\n  return node\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtYnVpbGRlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixtQkFBbUI7O0FBRTNDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVmaW5lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvdW5pc3QtYnVpbGRlci9pbmRleC5qcz8wZWU2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVcblxuZnVuY3Rpb24gdSh0eXBlLCBwcm9wcywgdmFsdWUpIHtcbiAgdmFyIG5vZGVcblxuICBpZiAoXG4gICAgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpICYmXG4gICAgKHR5cGVvZiBwcm9wcyAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShwcm9wcykpXG4gICkge1xuICAgIHZhbHVlID0gcHJvcHNcbiAgICBwcm9wcyA9IHt9XG4gIH1cblxuICBub2RlID0gT2JqZWN0LmFzc2lnbih7dHlwZTogU3RyaW5nKHR5cGUpfSwgcHJvcHMpXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgbm9kZS5jaGlsZHJlbiA9IHZhbHVlXG4gIH0gZWxzZSBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIG5vZGUudmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZXR1cm4gbm9kZVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-builder/index.js\n");

/***/ })

};
;