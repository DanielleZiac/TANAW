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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.png */ \"(app-pages-browser)/./app/auth/auth.png\");\n/* harmony import */ var _styles_buttonBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/buttonBox */ \"(app-pages-browser)/./app/styles/buttonBox.tsx\");\n/* harmony import */ var _styles_inputBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/inputBox */ \"(app-pages-browser)/./app/styles/inputBox.tsx\");\n/* harmony import */ var _styles_textBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/textBox */ \"(app-pages-browser)/./app/styles/textBox.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import the TextBoxPanel component\nconst AuthPage = ()=>{\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [srCode, setSrCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [school, setSchool] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [signUpPassword, setSignUpPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const handleSignUpClick = ()=>{\n        if (containerRef.current) {\n            containerRef.current.scrollLeft = containerRef.current.clientWidth;\n        }\n    };\n    const handleSignInClick = ()=>{\n        if (containerRef.current) {\n            containerRef.current.scrollLeft = 0;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        className: \"flex h-screen overflow-x-hidden scroll-smooth\",\n        style: {\n            width: '200vw'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0 w-2/5 h-full flex items-start justify-start p-8 bg-[#dbdfe2] bg-opacity-70\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-sm p-8 rounded-lg ml-8 mt-24\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold text-2xl mb-4\",\n                            children: \"TANAW/Logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"sr-code\",\n                            type: \"text\",\n                            value: srCode,\n                            setValue: setSrCode,\n                            placeholder: \"SR-Code\",\n                            style: {\n                                width: '120%'\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"password\",\n                            type: \"password\",\n                            value: password,\n                            setValue: setPassword,\n                            placeholder: \"Password\",\n                            style: {\n                                width: '120%'\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-blue-700 mb-4\",\n                            children: [\n                                \"Don’t have an account yet? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: handleSignUpClick,\n                                    className: \"text-blue-700 cursor-pointer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n                                        children: \"Sign up\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 115\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 40\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_buttonBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            style: {\n                                width: '120%'\n                            },\n                            children: \"Log In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0 w-3/5 h-full flex items-center justify-center p-8 bg-[#dbdfe2] bg-opacity-70\",\n                style: {\n                    backgroundImage: \"url(\".concat(_auth_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src, \")\"),\n                    backgroundSize: '80%',\n                    backgroundPosition: 'bottom',\n                    backgroundRepeat: 'no-repeat'\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0 w-2/5 h-full flex items-start justify-end p-8 bg-[#dbdfe2] bg-opacity-70\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-sm p-8 rounded-lg mr-20 mt-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"sign-up-sr-code\",\n                            type: \"text\",\n                            value: srCode,\n                            setValue: setSrCode,\n                            placeholder: \"SR-Code\",\n                            style: {\n                                width: '120%'\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"first-name\",\n                            type: \"text\",\n                            value: firstName,\n                            setValue: setFirstName,\n                            placeholder: \"First Name\",\n                            style: {\n                                width: '120%'\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"last-name\",\n                            type: \"text\",\n                            value: lastName,\n                            setValue: setLastName,\n                            placeholder: \"Last Name\",\n                            style: {\n                                width: '120%'\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"school\",\n                            type: \"text\",\n                            value: school,\n                            setValue: setSchool,\n                            placeholder: \"School/Institution\",\n                            style: {\n                                width: '120%'\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_inputBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"sign-up-password\",\n                            type: \"password\",\n                            value: signUpPassword,\n                            setValue: setSignUpPassword,\n                            placeholder: \"Password\",\n                            style: {\n                                width: '120%'\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_textBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            style: {\n                                height: '50px',\n                                width: '120%'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"flex items-center justify-center text-sm -mt-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        className: \"mr-2\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \"Terms and Conditions\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-blue-800 mb-4 mt-4\",\n                            children: [\n                                \"Already have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: handleSignInClick,\n                                    className: \"text-blue-800 cursor-pointer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n                                        children: \"Sign in\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 113\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 38\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_buttonBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            style: {\n                                width: '120%'\n                            },\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zeohi\\\\Downloads\\\\TANAW-backup-2024-11-08\\\\TANAW-backup-2024-11-08\\\\app\\\\auth\\\\authpage.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthPage, \"QRtLcPkd0KzYpmO5BzCg54K/xSQ=\");\n_c = AuthPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthPage);\nvar _c;\n$RefreshReg$(_c, \"AuthPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hdXRoL2F1dGhwYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1A7QUFDRztBQUNGO0FBQ0csQ0FBQyxvQ0FBb0M7QUFFbEYsTUFBTU8sV0FBcUI7O0lBQ3pCLE1BQU1DLGVBQWVQLDZDQUFNQSxDQUFpQjtJQUU1QyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNhLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDZSxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNpQixnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQUM7SUFFckQsTUFBTW1CLG9CQUFvQjtRQUN4QixJQUFJYixhQUFhYyxPQUFPLEVBQUU7WUFDeEJkLGFBQWFjLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHZixhQUFhYyxPQUFPLENBQUNFLFdBQVc7UUFDcEU7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQjtRQUN4QixJQUFJakIsYUFBYWMsT0FBTyxFQUFFO1lBQ3hCZCxhQUFhYyxPQUFPLENBQUNDLFVBQVUsR0FBRztRQUNwQztJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQ0NDLEtBQUtuQjtRQUNMb0IsV0FBVTtRQUNWQyxPQUFPO1lBQUVDLE9BQU87UUFBUTs7MEJBR3hCLDhEQUFDSjtnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQUlFLFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBMEI7Ozs7OztzQ0FDeEMsOERBQUN2Qix3REFBUUE7NEJBQUMyQixJQUFHOzRCQUFVQyxNQUFLOzRCQUFPQyxPQUFPekI7NEJBQVEwQixVQUFVekI7NEJBQVcwQixhQUFZOzRCQUFVUCxPQUFPO2dDQUFFQyxPQUFPOzRCQUFNOzs7Ozs7c0NBQ25ILDhEQUFDekIsd0RBQVFBOzRCQUFDMkIsSUFBRzs0QkFBV0MsTUFBSzs0QkFBV0MsT0FBT3ZCOzRCQUFVd0IsVUFBVXZCOzRCQUFhd0IsYUFBWTs0QkFBV1AsT0FBTztnQ0FBRUMsT0FBTzs0QkFBTTs7Ozs7O3NDQUM3SCw4REFBQ087NEJBQUVULFdBQVU7O2dDQUE2Qjs4Q0FDYiw4REFBQ1U7b0NBQUtDLFNBQVNsQjtvQ0FBbUJPLFdBQVU7OENBQStCLDRFQUFDWTtrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRTNHLDhEQUFDcEMseURBQVNBOzRCQUFDeUIsT0FBTztnQ0FBRUMsT0FBTzs0QkFBTTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3hDLDhEQUFDSjtnQkFDQ0UsV0FBVTtnQkFDVkMsT0FBTztvQkFDTDFCLGlCQUFpQixPQUEyQixPQUFwQkEsaURBQWVBLENBQUNzQyxHQUFHLEVBQUM7b0JBQzVDQyxnQkFBZ0I7b0JBQ2hCQyxvQkFBb0I7b0JBQ3BCQyxrQkFBa0I7Z0JBQ3BCOzs7Ozs7MEJBS0YsOERBQUNsQjtnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQUlFLFdBQVU7O3NDQUNiLDhEQUFDdkIsd0RBQVFBOzRCQUFDMkIsSUFBRzs0QkFBa0JDLE1BQUs7NEJBQU9DLE9BQU96Qjs0QkFBUTBCLFVBQVV6Qjs0QkFBVzBCLGFBQVk7NEJBQVVQLE9BQU87Z0NBQUVDLE9BQU87NEJBQU07Ozs7OztzQ0FDM0gsOERBQUN6Qix3REFBUUE7NEJBQUMyQixJQUFHOzRCQUFhQyxNQUFLOzRCQUFPQyxPQUFPckI7NEJBQVdzQixVQUFVckI7NEJBQWNzQixhQUFZOzRCQUFhUCxPQUFPO2dDQUFFQyxPQUFPOzRCQUFNOzs7Ozs7c0NBQy9ILDhEQUFDekIsd0RBQVFBOzRCQUFDMkIsSUFBRzs0QkFBWUMsTUFBSzs0QkFBT0MsT0FBT25COzRCQUFVb0IsVUFBVW5COzRCQUFhb0IsYUFBWTs0QkFBWVAsT0FBTztnQ0FBRUMsT0FBTzs0QkFBTTs7Ozs7O3NDQUMzSCw4REFBQ3pCLHdEQUFRQTs0QkFBQzJCLElBQUc7NEJBQVNDLE1BQUs7NEJBQU9DLE9BQU9qQjs0QkFBUWtCLFVBQVVqQjs0QkFBV2tCLGFBQVk7NEJBQXFCUCxPQUFPO2dDQUFFQyxPQUFPOzRCQUFNOzs7Ozs7c0NBQzdILDhEQUFDekIsd0RBQVFBOzRCQUFDMkIsSUFBRzs0QkFBbUJDLE1BQUs7NEJBQVdDLE9BQU9mOzRCQUFnQmdCLFVBQVVmOzRCQUFtQmdCLGFBQVk7NEJBQVdQLE9BQU87Z0NBQUVDLE9BQU87NEJBQU07Ozs7OztzQ0FHakosOERBQUN4Qix1REFBWUE7NEJBQUN1QixPQUFPO2dDQUFFZ0IsUUFBUTtnQ0FBUWYsT0FBTzs0QkFBTztzQ0FDbkQsNEVBQUNnQjtnQ0FBTWxCLFdBQVU7O2tEQUNmLDhEQUFDbUI7d0NBQU1kLE1BQUs7d0NBQVdMLFdBQVU7Ozs7OztvQ0FBUzs7Ozs7Ozs7Ozs7O3NDQUs5Qyw4REFBQ1M7NEJBQUVULFdBQVU7O2dDQUFrQzs4Q0FDcEIsOERBQUNVO29DQUFLQyxTQUFTZDtvQ0FBbUJHLFdBQVU7OENBQStCLDRFQUFDWTtrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRXpHLDhEQUFDcEMseURBQVNBOzRCQUFDeUIsT0FBTztnQ0FBRUMsT0FBTzs0QkFBTTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUM7R0E5RU12QjtLQUFBQTtBQWdGTixpRUFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYXV0aC9hdXRocGFnZS50c3g/YmU4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGJhY2tncm91bmRJbWFnZSBmcm9tICcuL2F1dGgucG5nJztcclxuaW1wb3J0IEJ1dHRvbkJveCBmcm9tICcuLi9zdHlsZXMvYnV0dG9uQm94JztcclxuaW1wb3J0IElucHV0Qm94IGZyb20gJy4uL3N0eWxlcy9pbnB1dEJveCc7XHJcbmltcG9ydCBUZXh0Qm94UGFuZWwgZnJvbSAnLi4vc3R5bGVzL3RleHRCb3gnOyAvLyBJbXBvcnQgdGhlIFRleHRCb3hQYW5lbCBjb21wb25lbnRcclxuXHJcbmNvbnN0IEF1dGhQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBbc3JDb2RlLCBzZXRTckNvZGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaXJzdE5hbWUsIHNldEZpcnN0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NjaG9vbCwgc2V0U2Nob29sXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2lnblVwUGFzc3dvcmQsIHNldFNpZ25VcFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lnblVwQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IGNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudFdpZHRoO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ25JbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbExlZnQgPSAwO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IFxyXG4gICAgICByZWY9e2NvbnRhaW5lclJlZn0gXHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW4gb3ZlcmZsb3cteC1oaWRkZW4gc2Nyb2xsLXNtb290aFwiIFxyXG4gICAgICBzdHlsZT17eyB3aWR0aDogJzIwMHZ3JyB9fVxyXG4gICAgPlxyXG4gICAgICB7LyogUGFydCAxIC0gTG9naW4gU2VjdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctMi81IGgtZnVsbCBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQgcC04IGJnLVsjZGJkZmUyXSBiZy1vcGFjaXR5LTcwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gcC04IHJvdW5kZWQtbGcgbWwtOCBtdC0yNFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bCBtYi00XCI+VEFOQVcvTG9nbzwvaDE+XHJcbiAgICAgICAgICA8SW5wdXRCb3ggaWQ9XCJzci1jb2RlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17c3JDb2RlfSBzZXRWYWx1ZT17c2V0U3JDb2RlfSBwbGFjZWhvbGRlcj1cIlNSLUNvZGVcIiBzdHlsZT17eyB3aWR0aDogJzEyMCUnfX0gLz5cclxuICAgICAgICAgIDxJbnB1dEJveCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBzZXRWYWx1ZT17c2V0UGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBzdHlsZT17eyB3aWR0aDogJzEyMCUnfX0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ibHVlLTcwMCBtYi00XCI+XHJcbiAgICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50IHlldD8gPHNwYW4gb25DbGljaz17aGFuZGxlU2lnblVwQ2xpY2t9IGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDAgY3Vyc29yLXBvaW50ZXJcIj48dT5TaWduIHVwPC91Pjwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxCdXR0b25Cb3ggc3R5bGU9e3sgd2lkdGg6ICcxMjAlJ319PkxvZyBJbjwvQnV0dG9uQm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBQYXJ0IDIgLSBDZW50ZXIgU2VjdGlvbiAod2l0aCBCYWNrZ3JvdW5kIEltYWdlKSAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy0zLzUgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtOCBiZy1bI2RiZGZlMl0gYmctb3BhY2l0eS03MFwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZS5zcmN9KWAsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzgwJScsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBQYXJ0IDMgLSBTaWduLVVwIFNlY3Rpb24gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LTIvNSBoLWZ1bGwgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWVuZCBwLTggYmctWyNkYmRmZTJdIGJnLW9wYWNpdHktNzBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zbSBwLTggcm91bmRlZC1sZyBtci0yMCBtdC04XCI+XHJcbiAgICAgICAgICA8SW5wdXRCb3ggaWQ9XCJzaWduLXVwLXNyLWNvZGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtzckNvZGV9IHNldFZhbHVlPXtzZXRTckNvZGV9IHBsYWNlaG9sZGVyPVwiU1ItQ29kZVwiIHN0eWxlPXt7IHdpZHRoOiAnMTIwJSd9fSAvPlxyXG4gICAgICAgICAgPElucHV0Qm94IGlkPVwiZmlyc3QtbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2ZpcnN0TmFtZX0gc2V0VmFsdWU9e3NldEZpcnN0TmFtZX0gcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgc3R5bGU9e3sgd2lkdGg6ICcxMjAlJ319IC8+XHJcbiAgICAgICAgICA8SW5wdXRCb3ggaWQ9XCJsYXN0LW5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtsYXN0TmFtZX0gc2V0VmFsdWU9e3NldExhc3ROYW1lfSBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIHN0eWxlPXt7IHdpZHRoOiAnMTIwJSd9fSAvPlxyXG4gICAgICAgICAgPElucHV0Qm94IGlkPVwic2Nob29sXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17c2Nob29sfSBzZXRWYWx1ZT17c2V0U2Nob29sfSBwbGFjZWhvbGRlcj1cIlNjaG9vbC9JbnN0aXR1dGlvblwiIHN0eWxlPXt7IHdpZHRoOiAnMTIwJSd9fSAvPlxyXG4gICAgICAgICAgPElucHV0Qm94IGlkPVwic2lnbi11cC1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtzaWduVXBQYXNzd29yZH0gc2V0VmFsdWU9e3NldFNpZ25VcFBhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgc3R5bGU9e3sgd2lkdGg6ICcxMjAlJ319IC8+XHJcblxyXG4gICAgICAgICAgey8qIFRlcm1zIGFuZCBDb25kaXRpb25zIHdpdGhpbiBUZXh0Qm94UGFuZWwgKi99XHJcbiAgICAgICAgICA8VGV4dEJveFBhbmVsIHN0eWxlPXt7IGhlaWdodDogJzUwcHgnLCB3aWR0aDogJzEyMCUnIH19PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1zbSAtbXQtMlwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtci0yXCIgLz5cclxuICAgICAgICAgICAgICBUZXJtcyBhbmQgQ29uZGl0aW9uc1xyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9UZXh0Qm94UGFuZWw+XHJcblxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtODAwIG1iLTQgbXQtNFwiPlxyXG4gICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gPHNwYW4gb25DbGljaz17aGFuZGxlU2lnbkluQ2xpY2t9IGNsYXNzTmFtZT1cInRleHQtYmx1ZS04MDAgY3Vyc29yLXBvaW50ZXJcIj48dT5TaWduIGluPC91Pjwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxCdXR0b25Cb3ggc3R5bGU9e3sgd2lkdGg6ICcxMjAlJ319PlNpZ24gVXA8L0J1dHRvbkJveD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiYmFja2dyb3VuZEltYWdlIiwiQnV0dG9uQm94IiwiSW5wdXRCb3giLCJUZXh0Qm94UGFuZWwiLCJBdXRoUGFnZSIsImNvbnRhaW5lclJlZiIsInNyQ29kZSIsInNldFNyQ29kZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJzZXRGaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldExhc3ROYW1lIiwic2Nob29sIiwic2V0U2Nob29sIiwic2lnblVwUGFzc3dvcmQiLCJzZXRTaWduVXBQYXNzd29yZCIsImhhbmRsZVNpZ25VcENsaWNrIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJjbGllbnRXaWR0aCIsImhhbmRsZVNpZ25JbkNsaWNrIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImgxIiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInBsYWNlaG9sZGVyIiwicCIsInNwYW4iLCJvbkNsaWNrIiwidSIsInNyYyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImhlaWdodCIsImxhYmVsIiwiaW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/auth/authpage.tsx\n"));

/***/ })

});