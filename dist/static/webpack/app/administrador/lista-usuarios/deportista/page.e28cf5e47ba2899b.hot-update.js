"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/administrador/lista-usuarios/deportista/page",{

/***/ "(app-pages-browser)/./app/administrador/lista-usuarios/deportista/page.tsx":
/*!**************************************************************!*\
  !*** ./app/administrador/lista-usuarios/deportista/page.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_tablas_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/tablas/Table */ \"(app-pages-browser)/./components/tablas/Table.tsx\");\n// pages.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Home = ()=>{\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOpenModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const handleCloseModal = ()=>{\n        setIsModalOpen(false);\n    };\n    const handleFileInputChange = (e)=>{\n        const files = e.target.files;\n        if (files && files.length > 0) {\n            // Aquí puedes manejar la lógica relacionada con el archivo si es necesario\n            // Por ejemplo, puedes mostrar la información del archivo antes de abrir el modal\n            handleOpenModal();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-screen-xl mx-auto p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tablas_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                rol: \"Deportista\",\n                link: \"/app/administrador/info-usuario/deportista\"\n            }, void 0, false, {\n                fileName: \"/home/tkalejadro122/Documentos/box-fronend/app/administrador/lista-usuarios/deportista/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>alert(\"Usuarios descargados\"),\n                        className: \"bg-[#cd1919] text-white rounded p-2\",\n                        children: \"Descargar usuarios\"\n                    }, void 0, false, {\n                        fileName: \"/home/tkalejadro122/Documentos/box-fronend/app/administrador/lista-usuarios/deportista/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"fileInput\",\n                                className: \"bg-[#cd1919] text-white rounded p-2 cursor-pointer\",\n                                children: \"Carga masiva\"\n                            }, void 0, false, {\n                                fileName: \"/home/tkalejadro122/Documentos/box-fronend/app/administrador/lista-usuarios/deportista/page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                id: \"fileInput\",\n                                style: {\n                                    display: \"none\"\n                                },\n                                onChange: handleFileInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/tkalejadro122/Documentos/box-fronend/app/administrador/lista-usuarios/deportista/page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>alert(\"Agregar usuario\"),\n                                className: \"bg-[#cd1919] text-white rounded p-2\",\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"/home/tkalejadro122/Documentos/box-fronend/app/administrador/lista-usuarios/deportista/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/tkalejadro122/Documentos/box-fronend/app/administrador/lista-usuarios/deportista/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tkalejadro122/Documentos/box-fronend/app/administrador/lista-usuarios/deportista/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tkalejadro122/Documentos/box-fronend/app/administrador/lista-usuarios/deportista/page.tsx\",\n        lineNumber: 29,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Home, \"mLsII5HRP5G63IA/8vjZ5YHXWr8=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbmlzdHJhZG9yL2xpc3RhLXVzdWFyaW9zL2RlcG9ydGlzdGEvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxZQUFZOzs7QUFFNEI7QUFDTTtBQUk5QyxNQUFNRyxPQUFpQjs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1LLGtCQUFrQjtRQUN2QkQsZUFBZTtJQUNoQjtJQUVBLE1BQU1FLG1CQUFtQjtRQUN4QkYsZUFBZTtJQUNoQjtJQUVBLE1BQU1HLHdCQUF3QixDQUFDQztRQUM5QixNQUFNQyxRQUFRRCxFQUFFRSxNQUFNLENBQUNELEtBQUs7UUFDNUIsSUFBSUEsU0FBU0EsTUFBTUUsTUFBTSxHQUFHLEdBQUc7WUFDOUIsMkVBQTJFO1lBQzNFLGlGQUFpRjtZQUNqRk47UUFDRDtJQUNEO0lBRUEscUJBQ0MsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDWixnRUFBS0E7Z0JBQUNhLEtBQUk7Z0JBQWFDLE1BQUs7Ozs7OzswQkFDN0IsOERBQUNIO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0c7d0JBQ0FDLFNBQVMsSUFBTUMsTUFBTTt3QkFDckJMLFdBQVU7a0NBQ1Y7Ozs7OztrQ0FHRCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDTTtnQ0FBTUMsU0FBUTtnQ0FBWVAsV0FBVTswQ0FBcUQ7Ozs7OzswQ0FHMUYsOERBQUNRO2dDQUNBQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxPQUFPO29DQUFFQyxTQUFTO2dDQUFPO2dDQUN6QkMsVUFBVW5COzs7Ozs7MENBRVgsOERBQUNTO2dDQUNBQyxTQUFTLElBQU1DLE1BQU07Z0NBQ3JCTCxXQUFVOzBDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRTjtHQW5ETVg7S0FBQUE7QUFxRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FkbWluaXN0cmFkb3IvbGlzdGEtdXN1YXJpb3MvZGVwb3J0aXN0YS9wYWdlLnRzeD9lMTAwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzLnRzeFxuJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0AvY29tcG9uZW50cy90YWJsYXMvVGFibGUnO1xuaW1wb3J0IE1vZGFsQXJjaGl2byBmcm9tICdAL2NvbXBvbmVudHMvTW9kYWxBcmNoaXZvL01vZGFsQXJjaGl2byc7XG5pbXBvcnQgZGF0YSBmcm9tICdAL3BydWViYXMvdXN1YXJpb3MuanNvbic7XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuXHRjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XG5cdFx0c2V0SXNNb2RhbE9wZW4odHJ1ZSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcblx0XHRzZXRJc01vZGFsT3BlbihmYWxzZSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlRmlsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cdFx0Y29uc3QgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcblx0XHRpZiAoZmlsZXMgJiYgZmlsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Ly8gQXF1w60gcHVlZGVzIG1hbmVqYXIgbGEgbMOzZ2ljYSByZWxhY2lvbmFkYSBjb24gZWwgYXJjaGl2byBzaSBlcyBuZWNlc2FyaW9cblx0XHRcdC8vIFBvciBlamVtcGxvLCBwdWVkZXMgbW9zdHJhciBsYSBpbmZvcm1hY2nDs24gZGVsIGFyY2hpdm8gYW50ZXMgZGUgYWJyaXIgZWwgbW9kYWxcblx0XHRcdGhhbmRsZU9wZW5Nb2RhbCgpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXNjcmVlbi14bCBteC1hdXRvIHAtNlwiPlxuXHRcdFx0PFRhYmxlIHJvbD0nRGVwb3J0aXN0YScgbGluaz0nL2FwcC9hZG1pbmlzdHJhZG9yL2luZm8tdXN1YXJpby9kZXBvcnRpc3RhJy8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC00XCI+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBhbGVydCgnVXN1YXJpb3MgZGVzY2FyZ2Fkb3MnKX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJiZy1bI2NkMTkxOV0gdGV4dC13aGl0ZSByb3VuZGVkIHAtMlwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHREZXNjYXJnYXIgdXN1YXJpb3Ncblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZmlsZUlucHV0XCIgY2xhc3NOYW1lPVwiYmctWyNjZDE5MTldIHRleHQtd2hpdGUgcm91bmRlZCBwLTIgY3Vyc29yLXBvaW50ZXJcIj5cblx0XHRcdFx0XHRcdENhcmdhIG1hc2l2YVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwiZmlsZVwiXG5cdFx0XHRcdFx0XHRpZD1cImZpbGVJbnB1dFwiXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVGaWxlSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBhbGVydCgnQWdyZWdhciB1c3VhcmlvJyl9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJiZy1bI2NkMTkxOV0gdGV4dC13aGl0ZSByb3VuZGVkIHAtMlwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0K1xuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0ey8qIDxNb2RhbEFyY2hpdm8gaXNPcGVuPXtpc01vZGFsT3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0gLz4gKi99XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVGFibGUiLCJIb21lIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsImhhbmRsZU9wZW5Nb2RhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVGaWxlSW5wdXRDaGFuZ2UiLCJlIiwiZmlsZXMiLCJ0YXJnZXQiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJyb2wiLCJsaW5rIiwiYnV0dG9uIiwib25DbGljayIsImFsZXJ0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/administrador/lista-usuarios/deportista/page.tsx\n"));

/***/ })

});