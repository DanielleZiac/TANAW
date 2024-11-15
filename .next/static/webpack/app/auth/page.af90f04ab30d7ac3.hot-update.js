"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/page",{

/***/ "(app-pages-browser)/./app/auth/authpage.tsx":
/*!*******************************!*\
  !*** ./app/auth/authpage.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.png */ \"(app-pages-browser)/./app/auth/auth.png\");\n/* harmony import */ var _styles_buttonBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/buttonBox */ \"(app-pages-browser)/./app/styles/buttonBox.tsx\");\n/* harmony import */ var _styles_inputBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/inputBox */ \"(app-pages-browser)/./app/styles/inputBox.tsx\");\n// src/components/AuthPage.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthPage = ()=>{\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [srCode, setSrCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [school, setSchool] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [signUpPassword, setSignUpPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const handleSignUpClick = ()=>{\n        if (containerRef.current) {\n            containerRef.current.scrollLeft = containerRef.current.clientWidth;\n        }\n    };\n    const handleSignInClick = ()=>{\n        if (containerRef.current) {\n            containerRef.current.scrollLeft = 0;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        className: \"flex h-screen overflow-x-hidden scroll-smooth\",\n        style: {\n            width: '200vw'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0 w-2/5 h-full flex items-start justify-start p-8 bg-[#dbdfe2] bg-opacity-70\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-sm p-8 rounded-lg ml-8 mt-24\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold text-2xl mb-4\",\n                            children: \"TANAW/Logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"sr-code\",\n                            type: \"text\",\n                            value: srCode,\n                            setValue: setSrCode,\n                            placeholder: \"SR-Code\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"password\",\n                            type: \"password\",\n                            value: password,\n                            setValue: setPassword,\n                            placeholder: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-600 mb-4\",\n                            children: [\n                                \"Don’t have an account yet? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: handleSignUpClick,\n                                    className: \"text-blue-500 cursor-pointer\",\n                                    children: \"Sign up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 40\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_buttonBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: \"Log In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0 w-3/5 h-full flex items-center justify-center p-8 bg-[#dbdfe2] bg-opacity-70\",\n                style: {\n                    backgroundImage: \"url(\".concat(_auth_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src, \")\"),\n                    backgroundSize: '80%',\n                    backgroundPosition: 'bottom',\n                    backgroundRepeat: 'no-repeat'\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0 w-2/5 h-full flex items-start justify-end p-8 bg-[#dbdfe2] bg-opacity-70\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-sm p-8 rounded-lg mr-8 mt-24\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold text-2xl mb-4\",\n                            children: \"TANAW/Logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"sign-up-sr-code\",\n                            type: \"text\",\n                            value: srCode,\n                            setValue: setSrCode,\n                            placeholder: \"SR-Code\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"first-name\",\n                            type: \"text\",\n                            value: firstName,\n                            setValue: setFirstName,\n                            placeholder: \"First Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"last-name\",\n                            type: \"text\",\n                            value: lastName,\n                            setValue: setLastName,\n                            placeholder: \"Last Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"school\",\n                            type: \"text\",\n                            value: school,\n                            setValue: setSchool,\n                            placeholder: \"School/Institution\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"sign-up-password\",\n                            type: \"password\",\n                            value: signUpPassword,\n                            setValue: setSignUpPassword,\n                            placeholder: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"flex items-center text-sm mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    className: \"mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"Terms and Conditions\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-600 mb-4\",\n                            children: [\n                                \"Already have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: handleSignInClick,\n                                    className: \"text-blue-500 cursor-pointer\",\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 38\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_buttonBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthPage, \"QRtLcPkd0KzYpmO5BzCg54K/xSQ=\");\n_c = AuthPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthPage);\nvar _c;\n$RefreshReg$(_c, \"AuthPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hdXRoL2F1dGhwYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsOEJBQThCOzs7QUFFa0I7QUFDUDtBQUNHO0FBQ0Y7QUFFMUMsTUFBTU0sV0FBcUI7O0lBQ3pCLE1BQU1DLGVBQWVOLDZDQUFNQSxDQUFpQjtJQUU1QyxNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDYyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2dCLGdCQUFnQkMsa0JBQWtCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNa0Isb0JBQW9CO1FBQ3hCLElBQUliLGFBQWFjLE9BQU8sRUFBRTtZQUN4QmQsYUFBYWMsT0FBTyxDQUFDQyxVQUFVLEdBQUdmLGFBQWFjLE9BQU8sQ0FBQ0UsV0FBVztRQUNwRTtJQUNGO0lBRUEsTUFBTUMsb0JBQW9CO1FBQ3hCLElBQUlqQixhQUFhYyxPQUFPLEVBQUU7WUFDeEJkLGFBQWFjLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHO1FBQ3BDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFDQ0MsS0FBS25CO1FBQ0xvQixXQUFVO1FBQ1ZDLE9BQU87WUFBRUMsT0FBTztRQUFROzswQkFHeEIsOERBQUNKO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUEwQjs7Ozs7O3NDQUN4Qyw4REFBQ3RCLHdEQUFRQTs0QkFBQzBCLElBQUc7NEJBQVVDLE1BQUs7NEJBQU9DLE9BQU96Qjs0QkFBUTBCLFVBQVV6Qjs0QkFBVzBCLGFBQVk7Ozs7OztzQ0FDbkYsOERBQUM5Qix3REFBUUE7NEJBQUMwQixJQUFHOzRCQUFXQyxNQUFLOzRCQUFXQyxPQUFPdkI7NEJBQVV3QixVQUFVdkI7NEJBQWF3QixhQUFZOzs7Ozs7c0NBQzVGLDhEQUFDQzs0QkFBRVQsV0FBVTs7Z0NBQTZCOzhDQUNiLDhEQUFDVTtvQ0FBS0MsU0FBU2xCO29DQUFtQk8sV0FBVTs4Q0FBK0I7Ozs7Ozs7Ozs7OztzQ0FFeEcsOERBQUN2Qix5REFBU0E7c0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtmLDhEQUFDcUI7Z0JBQ0NFLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0x6QixpQkFBaUIsT0FBMkIsT0FBcEJBLGlEQUFlQSxDQUFDb0MsR0FBRyxFQUFDO29CQUM1Q0MsZ0JBQWdCO29CQUNoQkMsb0JBQW9CO29CQUNwQkMsa0JBQWtCO2dCQUNwQjs7Ozs7OzBCQUtGLDhEQUFDakI7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNGO29CQUFJRSxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQTBCOzs7Ozs7c0NBQ3hDLDhEQUFDdEIsd0RBQVFBOzRCQUFDMEIsSUFBRzs0QkFBa0JDLE1BQUs7NEJBQU9DLE9BQU96Qjs0QkFBUTBCLFVBQVV6Qjs0QkFBVzBCLGFBQVk7Ozs7OztzQ0FDM0YsOERBQUM5Qix3REFBUUE7NEJBQUMwQixJQUFHOzRCQUFhQyxNQUFLOzRCQUFPQyxPQUFPckI7NEJBQVdzQixVQUFVckI7NEJBQWNzQixhQUFZOzs7Ozs7c0NBQzVGLDhEQUFDOUIsd0RBQVFBOzRCQUFDMEIsSUFBRzs0QkFBWUMsTUFBSzs0QkFBT0MsT0FBT25COzRCQUFVb0IsVUFBVW5COzRCQUFhb0IsYUFBWTs7Ozs7O3NDQUN6Riw4REFBQzlCLHdEQUFRQTs0QkFBQzBCLElBQUc7NEJBQVNDLE1BQUs7NEJBQU9DLE9BQU9qQjs0QkFBUWtCLFVBQVVqQjs0QkFBV2tCLGFBQVk7Ozs7OztzQ0FDbEYsOERBQUM5Qix3REFBUUE7NEJBQUMwQixJQUFHOzRCQUFtQkMsTUFBSzs0QkFBV0MsT0FBT2Y7NEJBQWdCZ0IsVUFBVWY7NEJBQW1CZ0IsYUFBWTs7Ozs7O3NDQUNoSCw4REFBQ1E7NEJBQU1oQixXQUFVOzs4Q0FDZiw4REFBQ2lCO29DQUFNWixNQUFLO29DQUFXTCxXQUFVOzs7Ozs7Z0NBQVM7Ozs7Ozs7c0NBRzVDLDhEQUFDUzs0QkFBRVQsV0FBVTs7Z0NBQTZCOzhDQUNmLDhEQUFDVTtvQ0FBS0MsU0FBU2Q7b0NBQW1CRyxXQUFVOzhDQUErQjs7Ozs7Ozs7Ozs7O3NDQUV0Ryw4REFBQ3ZCLHlEQUFTQTtzQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7R0ExRU1FO0tBQUFBO0FBNEVOLGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hdXRoL2F1dGhwYWdlLnRzeD9iZTg1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jb21wb25lbnRzL0F1dGhQYWdlLnRzeFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnLi9hdXRoLnBuZyc7XHJcbmltcG9ydCBCdXR0b25Cb3ggZnJvbSAnLi4vc3R5bGVzL2J1dHRvbkJveCc7XHJcbmltcG9ydCBJbnB1dEJveCBmcm9tICcuLi9zdHlsZXMvaW5wdXRCb3gnO1xyXG5cclxuY29uc3QgQXV0aFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IFtzckNvZGUsIHNldFNyQ29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2Nob29sLCBzZXRTY2hvb2xdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzaWduVXBQYXNzd29yZCwgc2V0U2lnblVwUGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaWduVXBDbGljayA9ICgpID0+IHtcclxuICAgIGlmIChjb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICBjb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxMZWZ0ID0gY29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGg7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lnbkluQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IDA7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgXHJcbiAgICAgIHJlZj17Y29udGFpbmVyUmVmfSBcclxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiBvdmVyZmxvdy14LWhpZGRlbiBzY3JvbGwtc21vb3RoXCIgXHJcbiAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjAwdncnIH19XHJcbiAgICA+XHJcbiAgICAgIHsvKiBQYXJ0IDEgLSBMb2dpbiBTZWN0aW9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy0yLzUgaC1mdWxsIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCBwLTggYmctWyNkYmRmZTJdIGJnLW9wYWNpdHktNzBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zbSBwLTggcm91bmRlZC1sZyBtbC04IG10LTI0XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsIG1iLTRcIj5UQU5BVy9Mb2dvPC9oMT5cclxuICAgICAgICAgIDxJbnB1dEJveCBpZD1cInNyLWNvZGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtzckNvZGV9IHNldFZhbHVlPXtzZXRTckNvZGV9IHBsYWNlaG9sZGVyPVwiU1ItQ29kZVwiIC8+XHJcbiAgICAgICAgICA8SW5wdXRCb3ggaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gc2V0VmFsdWU9e3NldFBhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMCBtYi00XCI+XHJcbiAgICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50IHlldD8gPHNwYW4gb25DbGljaz17aGFuZGxlU2lnblVwQ2xpY2t9IGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgY3Vyc29yLXBvaW50ZXJcIj5TaWduIHVwPC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPEJ1dHRvbkJveD5Mb2cgSW48L0J1dHRvbkJveD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogUGFydCAyIC0gQ2VudGVyIFNlY3Rpb24gKHdpdGggQmFja2dyb3VuZCBJbWFnZSkgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctMy81IGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTggYmctWyNkYmRmZTJdIGJnLW9wYWNpdHktNzBcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2Uuc3JjfSlgLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6ICc4MCUnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogUGFydCAzIC0gU2lnbi1VcCBTZWN0aW9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy0yLzUgaC1mdWxsIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1lbmQgcC04IGJnLVsjZGJkZmUyXSBiZy1vcGFjaXR5LTcwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gcC04IHJvdW5kZWQtbGcgbXItOCBtdC0yNFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bCBtYi00XCI+VEFOQVcvTG9nbzwvaDE+XHJcbiAgICAgICAgICA8SW5wdXRCb3ggaWQ9XCJzaWduLXVwLXNyLWNvZGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtzckNvZGV9IHNldFZhbHVlPXtzZXRTckNvZGV9IHBsYWNlaG9sZGVyPVwiU1ItQ29kZVwiIC8+XHJcbiAgICAgICAgICA8SW5wdXRCb3ggaWQ9XCJmaXJzdC1uYW1lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17Zmlyc3ROYW1lfSBzZXRWYWx1ZT17c2V0Rmlyc3ROYW1lfSBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIiAvPlxyXG4gICAgICAgICAgPElucHV0Qm94IGlkPVwibGFzdC1uYW1lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17bGFzdE5hbWV9IHNldFZhbHVlPXtzZXRMYXN0TmFtZX0gcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiAvPlxyXG4gICAgICAgICAgPElucHV0Qm94IGlkPVwic2Nob29sXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17c2Nob29sfSBzZXRWYWx1ZT17c2V0U2Nob29sfSBwbGFjZWhvbGRlcj1cIlNjaG9vbC9JbnN0aXR1dGlvblwiIC8+XHJcbiAgICAgICAgICA8SW5wdXRCb3ggaWQ9XCJzaWduLXVwLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3NpZ25VcFBhc3N3b3JkfSBzZXRWYWx1ZT17c2V0U2lnblVwUGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gbWItNFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwibXItMlwiIC8+XHJcbiAgICAgICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwIG1iLTRcIj5cclxuICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IDxzcGFuIG9uQ2xpY2s9e2hhbmRsZVNpZ25JbkNsaWNrfSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGN1cnNvci1wb2ludGVyXCI+U2lnbiBpbjwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxCdXR0b25Cb3g+U2lnbiBVcDwvQnV0dG9uQm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJCdXR0b25Cb3giLCJJbnB1dEJveCIsIkF1dGhQYWdlIiwiY29udGFpbmVyUmVmIiwic3JDb2RlIiwic2V0U3JDb2RlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJzY2hvb2wiLCJzZXRTY2hvb2wiLCJzaWduVXBQYXNzd29yZCIsInNldFNpZ25VcFBhc3N3b3JkIiwiaGFuZGxlU2lnblVwQ2xpY2siLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsImNsaWVudFdpZHRoIiwiaGFuZGxlU2lnbkluQ2xpY2siLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaDEiLCJpZCIsInR5cGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwicGxhY2Vob2xkZXIiLCJwIiwic3BhbiIsIm9uQ2xpY2siLCJzcmMiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJsYWJlbCIsImlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/auth/authpage.tsx\n"));

/***/ })

});