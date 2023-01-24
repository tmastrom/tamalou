"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// import { lightTheme, darkTheme } from '../styles/Theme'\nconst lightTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.createTheme)({\n    palette: {\n        mode: \"light\"\n    }\n});\nconst darkTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.createTheme)({\n    palette: {\n        mode: \"dark\"\n    }\n});\nfunction getActiveTheme(themeMode) {\n    return themeMode === \"light\" ? lightTheme : darkTheme;\n}\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: activeTheme , 1: setActiveTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(lightTheme);\n    const { 0: selectedTheme , 1: setSelectedTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"light\");\n    const toggleTheme = ()=>{\n        const desiredTheme = selectedTheme == \"light\" ? \"dark\" : \"light\";\n        setSelectedTheme(desiredTheme);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setActiveTheme(getActiveTheme(selectedTheme));\n    }, [\n        selectedTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        theme: lightTheme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps,\n            toggleTheme: toggleTheme\n        }, void 0, false, {\n            fileName: \"/Users/mastro/code/tamaloo/pages/_app.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mastro/code/tamaloo/pages/_app.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDaUU7QUFDdEI7QUFDM0MsMERBQTBEO0FBRTFELE1BQU1JLFVBQVUsR0FBR0gsaUVBQVcsQ0FBQztJQUM3QkksT0FBTyxFQUFFO1FBQ1BDLElBQUksRUFBRSxPQUFPO0tBQ2Q7Q0FDRixDQUFDO0FBRUYsTUFBTUMsU0FBUyxHQUFHTixpRUFBVyxDQUFDO0lBQzVCSSxPQUFPLEVBQUU7UUFDUEMsSUFBSSxFQUFFLE1BQU07S0FDYjtDQUNGLENBQUM7QUFFRixTQUFTRSxjQUFjLENBQUNDLFNBQTJCLEVBQUU7SUFDbkQsT0FBT0EsU0FBUyxLQUFLLE9BQU8sR0FBR0wsVUFBVSxHQUFHRyxTQUFTLENBQUM7QUFDeEQsQ0FBQztBQUVELFNBQVNHLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELE1BQU0sS0FBQ0MsV0FBVyxNQUFFQyxjQUFjLE1BQUlYLCtDQUFRLENBQUNDLFVBQVUsQ0FBQztJQUMxRCxNQUFNLEtBQUNXLGFBQWEsTUFBRUMsZ0JBQWdCLE1BQUliLCtDQUFRLENBQW1CLE9BQU8sQ0FBQztJQUU3RSxNQUFNYyxXQUFXLEdBQStDLElBQU07UUFDcEUsTUFBTUMsWUFBWSxHQUFHSCxhQUFhLElBQUksT0FBTyxHQUFHLE1BQU0sR0FBRyxPQUFPO1FBQ2hFQyxnQkFBZ0IsQ0FBQ0UsWUFBWSxDQUFDO0lBQ2hDLENBQUM7SUFFRGhCLGdEQUFTLENBQUMsSUFBTTtRQUNkWSxjQUFjLENBQUNOLGNBQWMsQ0FBQ08sYUFBYSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxFQUFFO1FBQUNBLGFBQWE7S0FBQyxDQUFDO0lBRW5CLHFCQUNFLDhEQUFDZiwrREFBYTtRQUFDbUIsS0FBSyxFQUFFZixVQUFVO2tCQUM5Qiw0RUFBQ08sU0FBUztZQUFFLEdBQUdDLFNBQVM7WUFBRUssV0FBVyxFQUFFQSxXQUFXOzs7OztnQkFBRzs7Ozs7WUFDdkMsQ0FDakI7QUFDSCxDQUFDO0FBR0QsaUVBQWVQLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgbGlnaHRUaGVtZSwgZGFya1RoZW1lIH0gZnJvbSAnLi4vc3R5bGVzL1RoZW1lJ1xuXG5jb25zdCBsaWdodFRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgbW9kZTogJ2xpZ2h0J1xuICB9XG59KVxuXG5jb25zdCBkYXJrVGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiAnZGFyaydcbiAgfVxufSlcblxuZnVuY3Rpb24gZ2V0QWN0aXZlVGhlbWUodGhlbWVNb2RlOiAnbGlnaHQnIHwgJ2RhcmsnKSB7XG4gIHJldHVybiB0aGVtZU1vZGUgPT09ICdsaWdodCcgPyBsaWdodFRoZW1lIDogZGFya1RoZW1lO1xufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IFthY3RpdmVUaGVtZSwgc2V0QWN0aXZlVGhlbWVdID0gdXNlU3RhdGUobGlnaHRUaGVtZSk7XG4gIGNvbnN0IFtzZWxlY3RlZFRoZW1lLCBzZXRTZWxlY3RlZFRoZW1lXSA9IHVzZVN0YXRlPCdsaWdodCcgfCAnZGFyayc+KCdsaWdodCcpO1xuXG4gIGNvbnN0IHRvZ2dsZVRoZW1lOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjxIVE1MQW5jaG9yRWxlbWVudD4gPSAoKSA9PiB7XG4gICAgY29uc3QgZGVzaXJlZFRoZW1lID0gc2VsZWN0ZWRUaGVtZSA9PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0J1xuICAgIHNldFNlbGVjdGVkVGhlbWUoZGVzaXJlZFRoZW1lKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBY3RpdmVUaGVtZShnZXRBY3RpdmVUaGVtZShzZWxlY3RlZFRoZW1lKSlcbiAgfSwgW3NlbGVjdGVkVGhlbWVdKVxuXG4gIHJldHVybihcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17bGlnaHRUaGVtZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IHRvZ2dsZVRoZW1lPXt0b2dnbGVUaGVtZX0vPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsImNyZWF0ZVRoZW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJsaWdodFRoZW1lIiwicGFsZXR0ZSIsIm1vZGUiLCJkYXJrVGhlbWUiLCJnZXRBY3RpdmVUaGVtZSIsInRoZW1lTW9kZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYWN0aXZlVGhlbWUiLCJzZXRBY3RpdmVUaGVtZSIsInNlbGVjdGVkVGhlbWUiLCJzZXRTZWxlY3RlZFRoZW1lIiwidG9nZ2xlVGhlbWUiLCJkZXNpcmVkVGhlbWUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();