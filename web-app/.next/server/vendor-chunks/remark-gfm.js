"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-gfm";
exports.ids = ["vendor-chunks/remark-gfm"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-gfm/index.js":
/*!******************************************!*\
  !*** ./node_modules/remark-gfm/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar syntax = __webpack_require__(/*! micromark-extension-gfm */ \"(ssr)/./node_modules/micromark-extension-gfm/index.js\")\nvar fromMarkdown = __webpack_require__(/*! mdast-util-gfm/from-markdown */ \"(ssr)/./node_modules/mdast-util-gfm/from-markdown.js\")\nvar toMarkdown = __webpack_require__(/*! mdast-util-gfm/to-markdown */ \"(ssr)/./node_modules/mdast-util-gfm/to-markdown.js\")\n\nvar warningIssued\n\nmodule.exports = gfm\n\nfunction gfm(options) {\n  var data = this.data()\n\n  /* istanbul ignore next - old remark. */\n  if (\n    !warningIssued &&\n    ((this.Parser &&\n      this.Parser.prototype &&\n      this.Parser.prototype.blockTokenizers) ||\n      (this.Compiler &&\n        this.Compiler.prototype &&\n        this.Compiler.prototype.visitors))\n  ) {\n    warningIssued = true\n    console.warn(\n      '[remark-gfm] Warning: please upgrade to remark 13 to use this plugin'\n    )\n  }\n\n  add('micromarkExtensions', syntax(options))\n  add('fromMarkdownExtensions', fromMarkdown)\n  add('toMarkdownExtensions', toMarkdown(options))\n\n  function add(field, value) {\n    /* istanbul ignore if - other extensions. */\n    if (data[field]) data[field].push(value)\n    else data[field] = [value]\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLWdmbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsc0ZBQXlCO0FBQzlDLG1CQUFtQixtQkFBTyxDQUFDLDBGQUE4QjtBQUN6RCxpQkFBaUIsbUJBQU8sQ0FBQyxzRkFBNEI7O0FBRXJEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWZpbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9yZW1hcmstZ2ZtL2luZGV4LmpzPzcxZGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbnZhciBzeW50YXggPSByZXF1aXJlKCdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbScpXG52YXIgZnJvbU1hcmtkb3duID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1nZm0vZnJvbS1tYXJrZG93bicpXG52YXIgdG9NYXJrZG93biA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtZ2ZtL3RvLW1hcmtkb3duJylcblxudmFyIHdhcm5pbmdJc3N1ZWRcblxubW9kdWxlLmV4cG9ydHMgPSBnZm1cblxuZnVuY3Rpb24gZ2ZtKG9wdGlvbnMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLmRhdGEoKVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gb2xkIHJlbWFyay4gKi9cbiAgaWYgKFxuICAgICF3YXJuaW5nSXNzdWVkICYmXG4gICAgKCh0aGlzLlBhcnNlciAmJlxuICAgICAgdGhpcy5QYXJzZXIucHJvdG90eXBlICYmXG4gICAgICB0aGlzLlBhcnNlci5wcm90b3R5cGUuYmxvY2tUb2tlbml6ZXJzKSB8fFxuICAgICAgKHRoaXMuQ29tcGlsZXIgJiZcbiAgICAgICAgdGhpcy5Db21waWxlci5wcm90b3R5cGUgJiZcbiAgICAgICAgdGhpcy5Db21waWxlci5wcm90b3R5cGUudmlzaXRvcnMpKVxuICApIHtcbiAgICB3YXJuaW5nSXNzdWVkID0gdHJ1ZVxuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdbcmVtYXJrLWdmbV0gV2FybmluZzogcGxlYXNlIHVwZ3JhZGUgdG8gcmVtYXJrIDEzIHRvIHVzZSB0aGlzIHBsdWdpbidcbiAgICApXG4gIH1cblxuICBhZGQoJ21pY3JvbWFya0V4dGVuc2lvbnMnLCBzeW50YXgob3B0aW9ucykpXG4gIGFkZCgnZnJvbU1hcmtkb3duRXh0ZW5zaW9ucycsIGZyb21NYXJrZG93bilcbiAgYWRkKCd0b01hcmtkb3duRXh0ZW5zaW9ucycsIHRvTWFya2Rvd24ob3B0aW9ucykpXG5cbiAgZnVuY3Rpb24gYWRkKGZpZWxkLCB2YWx1ZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG90aGVyIGV4dGVuc2lvbnMuICovXG4gICAgaWYgKGRhdGFbZmllbGRdKSBkYXRhW2ZpZWxkXS5wdXNoKHZhbHVlKVxuICAgIGVsc2UgZGF0YVtmaWVsZF0gPSBbdmFsdWVdXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-gfm/index.js\n");

/***/ })

};
;