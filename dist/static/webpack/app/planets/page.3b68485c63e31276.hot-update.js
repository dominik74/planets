"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/planets/page",{

/***/ "(app-pages-browser)/./src/components/Aside.tsx":
/*!**********************************!*\
  !*** ./src/components/Aside.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Aside; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/AppContext */ \"(app-pages-browser)/./src/AppContext.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\twidth: 256px;\\n\tborder-right: 1px solid lightgray;\\n\tpadding: 16px;\\n\tbackground: rgb(234, 234, 234);\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\tlist-style-type: none;\\n\tmargin-left: 0px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\tbackground-color: \",\n        \";\\n\tborder: 1px solid \",\n        \";\\n\t// color: \",\n        \";\\n// font-weight: \",\n        \";\\n\tcursor: pointer;\\n\tborder-radius: 2px;\\n\t&:hover {\\n\t\tbackground-color: #0066cc2e;\\n\t\t// background-color: lightblue;\\n\t\tborder: 1px solid #0066cc;\\n\t\t// color: #0066cc;\\n\t}\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst StyledAside = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].aside(_templateObject());\n_c = StyledAside;\nconst StyledUl = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ul(_templateObject1());\n_c1 = StyledUl;\nconst StyledLi = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].li(_templateObject2(), (props)=>props.$isSelected ? \"#0066cc2e\" : \"none\", (props)=>props.$isSelected ? \"#0066cc\" : \"transparent\", (props)=>props.$isSelected ? \"#0066cc\" : \"black\", (props)=>props.$isSelected ? \"bold\" : \"normal\");\n_c2 = StyledLi;\nfunction Aside(props) {\n    _s();\n    const { planets } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_2__.AppContext);\n    function selectPlanet(id) {\n        props.setSelectedPlanetId(id);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledAside, {\n        children: [\n            props.children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledUl, {\n                children: planets.map((planet, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledLi, {\n                        $isSelected: i === props.selectedPlanetId,\n                        onClick: ()=>selectPlanet(i),\n                        children: planet.name\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\Dominik\\\\Documents\\\\react\\\\cbdataplanets\\\\src\\\\components\\\\Aside.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 6\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dominik\\\\Documents\\\\react\\\\cbdataplanets\\\\src\\\\components\\\\Aside.tsx\",\n                lineNumber: 52,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dominik\\\\Documents\\\\react\\\\cbdataplanets\\\\src\\\\components\\\\Aside.tsx\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, this);\n}\n_s(Aside, \"Rz0yfjBZcCwCJoOCUft94BkTM4Y=\");\n_c3 = Aside;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"StyledAside\");\n$RefreshReg$(_c1, \"StyledUl\");\n$RefreshReg$(_c2, \"StyledLi\");\n$RefreshReg$(_c3, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FzaWRlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNQO0FBQ0c7QUFFdEMsTUFBTUcsY0FBY0QseURBQU1BLENBQUNFLEtBQUs7S0FBMUJEO0FBV04sTUFBTUUsV0FBV0gseURBQU1BLENBQUNJLEVBQUU7TUFBcEJEO0FBS04sTUFBTUUsV0FBV0wseURBQU1BLENBQUNNLEVBQUUscUJBQ0xDLENBQUFBLFFBQVVBLE1BQU1DLFdBQVcsR0FBRyxjQUFjLFFBQzVDRCxDQUFBQSxRQUFVQSxNQUFNQyxXQUFXLEdBQUcsWUFBWSxlQUNsREQsQ0FBQUEsUUFBVUEsTUFBTUMsV0FBVyxHQUFHLFlBQVksU0FDckNELENBQUFBLFFBQVVBLE1BQU1DLFdBQVcsR0FBRyxTQUFTO01BSm5ESDtBQXFCUyxTQUFTSSxNQUFNRixLQUFZOztJQUN6QyxNQUFNLEVBQUNHLE9BQU8sRUFBQyxHQUFHWCxpREFBVUEsQ0FBQ0QsbURBQVVBO0lBRXZDLFNBQVNhLGFBQWFDLEVBQVU7UUFDL0JMLE1BQU1NLG1CQUFtQixDQUFDRDtJQUMzQjtJQUVBLHFCQUNDLDhEQUFDWDs7WUFDQ00sTUFBTU8sUUFBUTswQkFDZiw4REFBQ1g7MEJBQ0NPLFFBQVFLLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxrQkFDckIsOERBQUNaO3dCQUFpQkcsYUFBYVMsTUFBTVYsTUFBTVcsZ0JBQWdCO3dCQUFFQyxTQUFTLElBQU1SLGFBQWFNO2tDQUFLRCxPQUFPSSxJQUFJO3VCQUExRkg7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0FqQndCUjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Bc2lkZS50c3g/YWRkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIkAvQXBwQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmNvbnN0IFN0eWxlZEFzaWRlID0gc3R5bGVkLmFzaWRlYFxyXG5cdHdpZHRoOiAyNTZweDtcclxuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcblx0cGFkZGluZzogMTZweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgU3R5bGVkTGlQcm9wcyB7XHJcblx0JGlzU2VsZWN0ZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZFVsID0gc3R5bGVkLnVsYFxyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRtYXJnaW4tbGVmdDogMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkTGkgPSBzdHlsZWQubGk8U3R5bGVkTGlQcm9wcz5gXHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuJGlzU2VsZWN0ZWQgPyBcIiMwMDY2Y2MyZVwiIDogXCJub25lXCIpfTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IChwcm9wcy4kaXNTZWxlY3RlZCA/IFwiIzAwNjZjY1wiIDogXCJ0cmFuc3BhcmVudFwiKX07XHJcblx0Ly8gY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLiRpc1NlbGVjdGVkID8gXCIjMDA2NmNjXCIgOiBcImJsYWNrXCIpfTtcclxuLy8gZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLiRpc1NlbGVjdGVkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiKX07XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHQmOmhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDY2Y2MyZTtcclxuXHRcdC8vIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICMwMDY2Y2M7XHJcblx0XHQvLyBjb2xvcjogIzAwNjZjYztcclxuXHR9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG5cdGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG5cdHNlbGVjdGVkUGxhbmV0SWQ6IG51bWJlcjtcclxuXHRzZXRTZWxlY3RlZFBsYW5ldElkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXNpZGUocHJvcHM6IFByb3BzKSB7XHJcblx0Y29uc3Qge3BsYW5ldHN9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcblx0ZnVuY3Rpb24gc2VsZWN0UGxhbmV0KGlkOiBudW1iZXIpIHtcclxuXHRcdHByb3BzLnNldFNlbGVjdGVkUGxhbmV0SWQoaWQpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxTdHlsZWRBc2lkZT5cclxuXHRcdFx0e3Byb3BzLmNoaWxkcmVufVxyXG5cdFx0XHQ8U3R5bGVkVWw+XHJcblx0XHRcdFx0e3BsYW5ldHMubWFwKChwbGFuZXQsIGkpID0+IChcclxuXHRcdFx0XHRcdDxTdHlsZWRMaSBrZXk9e2l9ICRpc1NlbGVjdGVkPXtpID09PSBwcm9wcy5zZWxlY3RlZFBsYW5ldElkfSBvbkNsaWNrPXsoKSA9PiBzZWxlY3RQbGFuZXQoaSl9PntwbGFuZXQubmFtZX08L1N0eWxlZExpPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L1N0eWxlZFVsPlxyXG5cdFx0PC9TdHlsZWRBc2lkZT5cdFxyXG5cdClcclxufVxyXG4iXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsInVzZUNvbnRleHQiLCJzdHlsZWQiLCJTdHlsZWRBc2lkZSIsImFzaWRlIiwiU3R5bGVkVWwiLCJ1bCIsIlN0eWxlZExpIiwibGkiLCJwcm9wcyIsIiRpc1NlbGVjdGVkIiwiQXNpZGUiLCJwbGFuZXRzIiwic2VsZWN0UGxhbmV0IiwiaWQiLCJzZXRTZWxlY3RlZFBsYW5ldElkIiwiY2hpbGRyZW4iLCJtYXAiLCJwbGFuZXQiLCJpIiwic2VsZWN0ZWRQbGFuZXRJZCIsIm9uQ2xpY2siLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Aside.tsx\n"));

/***/ })

});