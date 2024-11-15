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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.png */ \"(app-pages-browser)/./app/auth/auth.png\");\n/* harmony import */ var _styles_buttonBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/buttonBox */ \"(app-pages-browser)/./app/styles/buttonBox.tsx\");\n/* harmony import */ var _styles_inputBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/inputBox */ \"(app-pages-browser)/./app/styles/inputBox.tsx\");\n/* harmony import */ var _styles_textBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/textBox */ \"(app-pages-browser)/./app/styles/textBox.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import the TextBoxPanel component\nconst AuthPage = ()=>{\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [srCode, setSrCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [school, setSchool] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [signUpPassword, setSignUpPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const handleSignUpClick = ()=>{\n        if (containerRef.current) {\n            containerRef.current.scrollLeft = containerRef.current.clientWidth;\n        }\n    };\n    const handleSignInClick = ()=>{\n        if (containerRef.current) {\n            containerRef.current.scrollLeft = 0;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        className: \"flex h-screen overflow-x-hidden scroll-smooth\",\n        style: {\n            width: '200vw'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0 w-2/5 h-full flex items-start justify-start p-8 bg-[#dbdfe2] bg-opacity-70\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-sm p-8 rounded-lg ml-8 mt-24\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold text-2xl mb-4\",\n                            children: \"TANAW/Logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"sr-code\",\n                            type: \"text\",\n                            value: srCode,\n                            setValue: setSrCode,\n                            placeholder: \"SR-Code\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"password\",\n                            type: \"password\",\n                            value: password,\n                            setValue: setPassword,\n                            placeholder: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-blue-700 mb-4\",\n                            children: [\n                                \"Don’t have an account yet? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: handleSignUpClick,\n                                    className: \"text-blue-700 cursor-pointer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n                                        children: \"Sign up\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 115\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 40\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_buttonBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: \"Log In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0 w-3/5 h-full flex items-center justify-center p-8 bg-[#dbdfe2] bg-opacity-70\",\n                style: {\n                    backgroundImage: \"url(\".concat(_auth_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src, \")\"),\n                    backgroundSize: '80%',\n                    backgroundPosition: 'bottom',\n                    backgroundRepeat: 'no-repeat'\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0 w-2/5 h-full flex items-start justify-end p-8 bg-[#dbdfe2] bg-opacity-70\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-sm p-8 rounded-lg mr-8 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"sign-up-sr-code\",\n                            type: \"text\",\n                            value: srCode,\n                            setValue: setSrCode,\n                            placeholder: \"SR-Code\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"first-name\",\n                            type: \"text\",\n                            value: firstName,\n                            setValue: setFirstName,\n                            placeholder: \"First Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"last-name\",\n                            type: \"text\",\n                            value: lastName,\n                            setValue: setLastName,\n                            placeholder: \"Last Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"school\",\n                            type: \"text\",\n                            value: school,\n                            setValue: setSchool,\n                            placeholder: \"School/Institution\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"sign-up-password\",\n                            type: \"password\",\n                            value: signUpPassword,\n                            setValue: setSignUpPassword,\n                            placeholder: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_textBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            style: {\n                                height: '50px'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"flex items-center justify-center text-sm -mt-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        className: \"mr-2\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \"Terms and Conditions\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-blue-800 mb-4 mt-4\",\n                            children: [\n                                \"Already have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: handleSignInClick,\n                                    className: \"text-blue-800 cursor-pointer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n                                        children: \"Sign in\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 113\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 38\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_buttonBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthPage, \"QRtLcPkd0KzYpmO5BzCg54K/xSQ=\");\n_c = AuthPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthPage);\nvar _c;\n$RefreshReg$(_c, \"AuthPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hdXRoL2F1dGhwYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1A7QUFDRztBQUNGO0FBQ0csQ0FBQyxvQ0FBb0M7QUFFbEYsTUFBTU8sV0FBcUI7O0lBQ3pCLE1BQU1DLGVBQWVQLDZDQUFNQSxDQUFpQjtJQUU1QyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNhLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDZSxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNpQixnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQUM7SUFFckQsTUFBTW1CLG9CQUFvQjtRQUN4QixJQUFJYixhQUFhYyxPQUFPLEVBQUU7WUFDeEJkLGFBQWFjLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHZixhQUFhYyxPQUFPLENBQUNFLFdBQVc7UUFDcEU7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQjtRQUN4QixJQUFJakIsYUFBYWMsT0FBTyxFQUFFO1lBQ3hCZCxhQUFhYyxPQUFPLENBQUNDLFVBQVUsR0FBRztRQUNwQztJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQ0NDLEtBQUtuQjtRQUNMb0IsV0FBVTtRQUNWQyxPQUFPO1lBQUVDLE9BQU87UUFBUTs7MEJBR3hCLDhEQUFDSjtnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQUlFLFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBMEI7Ozs7OztzQ0FDeEMsOERBQUN2Qix3REFBUUE7NEJBQUMyQixJQUFHOzRCQUFVQyxNQUFLOzRCQUFPQyxPQUFPekI7NEJBQVEwQixVQUFVekI7NEJBQVcwQixhQUFZOzs7Ozs7c0NBQ25GLDhEQUFDL0Isd0RBQVFBOzRCQUFDMkIsSUFBRzs0QkFBV0MsTUFBSzs0QkFBV0MsT0FBT3ZCOzRCQUFVd0IsVUFBVXZCOzRCQUFhd0IsYUFBWTs7Ozs7O3NDQUM1Riw4REFBQ0M7NEJBQUVULFdBQVU7O2dDQUE2Qjs4Q0FDYiw4REFBQ1U7b0NBQUtDLFNBQVNsQjtvQ0FBbUJPLFdBQVU7OENBQStCLDRFQUFDWTtrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRTNHLDhEQUFDcEMseURBQVNBO3NDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLZiw4REFBQ3NCO2dCQUNDRSxXQUFVO2dCQUNWQyxPQUFPO29CQUNMMUIsaUJBQWlCLE9BQTJCLE9BQXBCQSxpREFBZUEsQ0FBQ3NDLEdBQUcsRUFBQztvQkFDNUNDLGdCQUFnQjtvQkFDaEJDLG9CQUFvQjtvQkFDcEJDLGtCQUFrQjtnQkFDcEI7Ozs7OzswQkFLRiw4REFBQ2xCO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUN2Qix3REFBUUE7NEJBQUMyQixJQUFHOzRCQUFrQkMsTUFBSzs0QkFBT0MsT0FBT3pCOzRCQUFRMEIsVUFBVXpCOzRCQUFXMEIsYUFBWTs7Ozs7O3NDQUMzRiw4REFBQy9CLHdEQUFRQTs0QkFBQzJCLElBQUc7NEJBQWFDLE1BQUs7NEJBQU9DLE9BQU9yQjs0QkFBV3NCLFVBQVVyQjs0QkFBY3NCLGFBQVk7Ozs7OztzQ0FDNUYsOERBQUMvQix3REFBUUE7NEJBQUMyQixJQUFHOzRCQUFZQyxNQUFLOzRCQUFPQyxPQUFPbkI7NEJBQVVvQixVQUFVbkI7NEJBQWFvQixhQUFZOzs7Ozs7c0NBQ3pGLDhEQUFDL0Isd0RBQVFBOzRCQUFDMkIsSUFBRzs0QkFBU0MsTUFBSzs0QkFBT0MsT0FBT2pCOzRCQUFRa0IsVUFBVWpCOzRCQUFXa0IsYUFBWTs7Ozs7O3NDQUNsRiw4REFBQy9CLHdEQUFRQTs0QkFBQzJCLElBQUc7NEJBQW1CQyxNQUFLOzRCQUFXQyxPQUFPZjs0QkFBZ0JnQixVQUFVZjs0QkFBbUJnQixhQUFZOzs7Ozs7c0NBR2hILDhEQUFDOUIsdURBQVlBOzRCQUFDdUIsT0FBTztnQ0FBRWdCLFFBQVE7NEJBQU87c0NBQ3BDLDRFQUFDQztnQ0FBTWxCLFdBQVU7O2tEQUNmLDhEQUFDbUI7d0NBQU1kLE1BQUs7d0NBQVdMLFdBQVU7Ozs7OztvQ0FBUzs7Ozs7Ozs7Ozs7O3NDQUs5Qyw4REFBQ1M7NEJBQUVULFdBQVU7O2dDQUFrQzs4Q0FDcEIsOERBQUNVO29DQUFLQyxTQUFTZDtvQ0FBbUJHLFdBQVU7OENBQStCLDRFQUFDWTtrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRXpHLDhEQUFDcEMseURBQVNBO3NDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQTlFTUc7S0FBQUE7QUFnRk4saUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2F1dGgvYXV0aHBhZ2UudHN4P2JlODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnLi9hdXRoLnBuZyc7XHJcbmltcG9ydCBCdXR0b25Cb3ggZnJvbSAnLi4vc3R5bGVzL2J1dHRvbkJveCc7XHJcbmltcG9ydCBJbnB1dEJveCBmcm9tICcuLi9zdHlsZXMvaW5wdXRCb3gnO1xyXG5pbXBvcnQgVGV4dEJveFBhbmVsIGZyb20gJy4uL3N0eWxlcy90ZXh0Qm94JzsgLy8gSW1wb3J0IHRoZSBUZXh0Qm94UGFuZWwgY29tcG9uZW50XHJcblxyXG5jb25zdCBBdXRoUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHJcbiAgY29uc3QgW3NyQ29kZSwgc2V0U3JDb2RlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzY2hvb2wsIHNldFNjaG9vbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NpZ25VcFBhc3N3b3JkLCBzZXRTaWduVXBQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ25VcENsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbExlZnQgPSBjb250YWluZXJSZWYuY3VycmVudC5jbGllbnRXaWR0aDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTaWduSW5DbGljayA9ICgpID0+IHtcclxuICAgIGlmIChjb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICBjb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxMZWZ0ID0gMDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBcclxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9IFxyXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIG92ZXJmbG93LXgtaGlkZGVuIHNjcm9sbC1zbW9vdGhcIiBcclxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDB2dycgfX1cclxuICAgID5cclxuICAgICAgey8qIFBhcnQgMSAtIExvZ2luIFNlY3Rpb24gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LTIvNSBoLWZ1bGwgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0IHAtOCBiZy1bI2RiZGZlMl0gYmctb3BhY2l0eS03MFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXNtIHAtOCByb3VuZGVkLWxnIG1sLTggbXQtMjRcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgbWItNFwiPlRBTkFXL0xvZ288L2gxPlxyXG4gICAgICAgICAgPElucHV0Qm94IGlkPVwic3ItY29kZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3NyQ29kZX0gc2V0VmFsdWU9e3NldFNyQ29kZX0gcGxhY2Vob2xkZXI9XCJTUi1Db2RlXCIgLz5cclxuICAgICAgICAgIDxJbnB1dEJveCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBzZXRWYWx1ZT17c2V0UGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtNzAwIG1iLTRcIj5cclxuICAgICAgICAgICAgRG9u4oCZdCBoYXZlIGFuIGFjY291bnQgeWV0PyA8c3BhbiBvbkNsaWNrPXtoYW5kbGVTaWduVXBDbGlja30gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTcwMCBjdXJzb3ItcG9pbnRlclwiPjx1PlNpZ24gdXA8L3U+PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPEJ1dHRvbkJveD5Mb2cgSW48L0J1dHRvbkJveD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogUGFydCAyIC0gQ2VudGVyIFNlY3Rpb24gKHdpdGggQmFja2dyb3VuZCBJbWFnZSkgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctMy81IGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTggYmctWyNkYmRmZTJdIGJnLW9wYWNpdHktNzBcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2Uuc3JjfSlgLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6ICc4MCUnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogUGFydCAzIC0gU2lnbi1VcCBTZWN0aW9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy0yLzUgaC1mdWxsIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1lbmQgcC04IGJnLVsjZGJkZmUyXSBiZy1vcGFjaXR5LTcwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gcC04IHJvdW5kZWQtbGcgbXItOCBcIj5cclxuICAgICAgICAgIDxJbnB1dEJveCBpZD1cInNpZ24tdXAtc3ItY29kZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3NyQ29kZX0gc2V0VmFsdWU9e3NldFNyQ29kZX0gcGxhY2Vob2xkZXI9XCJTUi1Db2RlXCIgLz5cclxuICAgICAgICAgIDxJbnB1dEJveCBpZD1cImZpcnN0LW5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtmaXJzdE5hbWV9IHNldFZhbHVlPXtzZXRGaXJzdE5hbWV9IHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiIC8+XHJcbiAgICAgICAgICA8SW5wdXRCb3ggaWQ9XCJsYXN0LW5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtsYXN0TmFtZX0gc2V0VmFsdWU9e3NldExhc3ROYW1lfSBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIC8+XHJcbiAgICAgICAgICA8SW5wdXRCb3ggaWQ9XCJzY2hvb2xcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtzY2hvb2x9IHNldFZhbHVlPXtzZXRTY2hvb2x9IHBsYWNlaG9sZGVyPVwiU2Nob29sL0luc3RpdHV0aW9uXCIgLz5cclxuICAgICAgICAgIDxJbnB1dEJveCBpZD1cInNpZ24tdXAtcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17c2lnblVwUGFzc3dvcmR9IHNldFZhbHVlPXtzZXRTaWduVXBQYXNzd29yZH0gcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XHJcblxyXG4gICAgICAgICAgey8qIFRlcm1zIGFuZCBDb25kaXRpb25zIHdpdGhpbiBUZXh0Qm94UGFuZWwgKi99XHJcbiAgICAgICAgICA8VGV4dEJveFBhbmVsIHN0eWxlPXt7IGhlaWdodDogJzUwcHgnIH19PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1zbSAtbXQtMlwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtci0yXCIgLz5cclxuICAgICAgICAgICAgICBUZXJtcyBhbmQgQ29uZGl0aW9uc1xyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9UZXh0Qm94UGFuZWw+XHJcblxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtODAwIG1iLTQgbXQtNFwiPlxyXG4gICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gPHNwYW4gb25DbGljaz17aGFuZGxlU2lnbkluQ2xpY2t9IGNsYXNzTmFtZT1cInRleHQtYmx1ZS04MDAgY3Vyc29yLXBvaW50ZXJcIj48dT5TaWduIGluPC91Pjwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxCdXR0b25Cb3g+U2lnbiBVcDwvQnV0dG9uQm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJCdXR0b25Cb3giLCJJbnB1dEJveCIsIlRleHRCb3hQYW5lbCIsIkF1dGhQYWdlIiwiY29udGFpbmVyUmVmIiwic3JDb2RlIiwic2V0U3JDb2RlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJzY2hvb2wiLCJzZXRTY2hvb2wiLCJzaWduVXBQYXNzd29yZCIsInNldFNpZ25VcFBhc3N3b3JkIiwiaGFuZGxlU2lnblVwQ2xpY2siLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsImNsaWVudFdpZHRoIiwiaGFuZGxlU2lnbkluQ2xpY2siLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaDEiLCJpZCIsInR5cGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwicGxhY2Vob2xkZXIiLCJwIiwic3BhbiIsIm9uQ2xpY2siLCJ1Iiwic3JjIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiaGVpZ2h0IiwibGFiZWwiLCJpbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/auth/authpage.tsx\n"));

/***/ })

});