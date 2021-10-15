/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/newjersey.png */ \"./src/img/newjersey.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n::before,\\n::after {\\n  box-sizing: border-box;\\n  font-family: monospace;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"),\\n    linear-gradient(to right, red, white, white, green);\\n  background-repeat: no-repeat, no-repeat;\\n  background-attachment: fixed;\\n  background-size: 45vmin, 100%;\\n  /*   background-position: center; */\\n}\\n\\n.content {\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex-direction: column;\\n  margin-bottom: 90vh;\\n}\\n\\n.header {\\n  display: flex;\\n  flex-wrap: nowrap;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 20px;\\n  background-image: linear-gradient(to right,\\n      rgb(184, 111, 1, 0.5),\\n      rgba(184, 111, 1, 1),\\n      rgba(184, 111, 1, 1),\\n      rgba(184, 111, 1, 1),\\n      rgba(184, 111, 1, 0.5));\\n  margin: 0;\\n  padding: 10px;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  font-size: 2.5vw;\\n  width: 100%;\\n  z-index: 10;\\n}\\n\\n.header>a {\\n  text-decoration: none;\\n  color: rgb(0, 0, 0);\\n}\\n\\n.header>a:hover {\\n  text-decoration: none;\\n  background-color: rgb(163, 0, 0);\\n  cursor: pointer;\\n}\\n\\n#restaurant-name {\\n  margin-top: 15vh;\\n  align-self: center;\\n  font-family: \\\"Tangerine\\\", cursive;\\n  font-size: 15vw;\\n}\\n\\n.menu-div {\\n  margin-top: 10vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n.menu-div>div {\\n  flex-wrap: wrap;\\n  gap: 10px;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\n\\n.food-name {\\n  font-size: clamp(1rem, 1.7vw, 4rem);\\n  font-weight: 700;\\n}\\n\\n.food-description {\\n  font-size: clamp(1rem, 1.7vw, 4rem);\\n}\\n\\n.food-price {\\n  font-size: clamp(1rem, 2vw, 4rem);\\n  font-weight: 400;\\n}\\n\\n#drinks-text,\\n#appetizers-text,\\n#main-text,\\n#desserts-text {\\n  flex: 100%;\\n  font-size: 6vmin;\\n  margin-top: 8vh;\\n  scroll-margin-top: 8vh;\\n  text-align: center;\\n}\\n\\n.food-item {\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  flex: 0 0 25vw;\\n  width: 25vw;\\n  height: 14vmax;\\n  border: solid black 1px;\\n  padding: 4px;\\n  margin: 5px;\\n  background-color: rgba(194, 194, 194, 0.575);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_page/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant_page/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom-creation.js":
/*!*****************************!*\
  !*** ./src/dom-creation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom),\n/* harmony export */   \"createMenuItem\": () => (/* binding */ createMenuItem),\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction dom(element, attributes = {}, text, parent) {\n  const elem = document.createElement(element);\n  if (attributes) {\n    Object.assign(elem, attributes);\n  }\n  if (text) {\n    elem.innerText = text;\n  }\n  if (parent) {\n    parent.appendChild(elem);\n  }\n  return elem;\n}\n\nfunction createMenuItem(parent, food) {\n  const foodItem = document.createElement(\"div\");\n  foodItem.setAttribute(\"class\", \"food-item\");\n  dom(\n    \"div\", {\n      classList: \"food-name\"\n    },\n    food.name,\n    foodItem\n  );\n  dom(\n    \"div\", {\n      classList: \"food-description\"\n    },\n    food.description,\n    foodItem\n  );\n  dom(\n    \"div\", {\n      classList: \"food-price\"\n    },\n    food.price,\n    foodItem\n  );\n  parent.appendChild(foodItem);\n}\n\nfunction createMenu(parent, array) {\n  array.forEach((obj) => {\n    createMenuItem(parent, obj);\n  });\n}\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/dom-creation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _img_newjersey_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/newjersey.png */ \"./src/img/newjersey.png\");\n/* harmony import */ var _img_artie_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/artie.png */ \"./src/img/artie.png\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _dom_creation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-creation */ \"./src/dom-creation.js\");\n\n\n\n\n\n\n\nconst mainDiv = document.createElement(\"div\");\nmainDiv.setAttribute(\"class\", \"content\");\nmainDiv.setAttribute(\"id\", \"welcome-text\");\ndocument.body.appendChild(mainDiv);\n\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\"h6\", {\n    id: \"restaurant-name\"\n}, \"Nuovo Vesuvio\", mainDiv);\n\nconst headerDiv = (0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\n    \"div\", {\n        classList: \"header\"\n    },\n    null,\n    mainDiv\n);\n\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\n    \"a\", {\n        href: \"#welcome-text\"\n    },\n    \"Welcome\",\n    headerDiv\n);\n\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\n    \"a\", {\n        href: \"#drinks-text\"\n    },\n    \"Drinks\",\n    headerDiv\n);\n\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\n    \"a\", {\n        href: \"#appetizers-text\"\n    },\n    \"Appetizers\",\n    headerDiv\n);\n\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\n    \"a\", {\n        href: \"#main-text\"\n    },\n    \"Main Course\",\n    headerDiv\n);\n\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\n    \"a\", {\n        href: \"#desserts-text\"\n    },\n    \"Dessert\",\n    headerDiv\n);\n\nconst menuDiv = (0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\n    \"div\", {\n        classList: \"menu-div\"\n    },\n    null,\n    mainDiv\n);\n\nconst drinksDiv = (0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\n    \"div\", {\n        classList: \"drinks-div\"\n    },\n    null,\n    menuDiv\n);\n\nconst appetizersDiv = (0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\n    \"div\", {\n        classList: \"appetizers-div\"\n    },\n    null,\n    menuDiv\n);\n\nconst maindishDiv = (0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\n    \"div\", {\n        classList: \"main-div\"\n    },\n    null,\n    menuDiv\n);\n\nconst dessertsDiv = (0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\n    \"div\", {\n        classList: \"desserts-div\"\n    },\n    null,\n    menuDiv\n);\n\n\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\"h4\", {\n    id: \"drinks-text\"\n}, \"Drinks\", drinksDiv);\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.createMenu)(drinksDiv, _menu__WEBPACK_IMPORTED_MODULE_3__.drinks);\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\"h4\", {\n    id: \"appetizers-text\"\n}, \"Appetizers\", appetizersDiv);\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.createMenu)(appetizersDiv, _menu__WEBPACK_IMPORTED_MODULE_3__.appetizers);\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\"h4\", {\n    id: \"main-text\"\n}, \"Main Course\", maindishDiv);\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.createMenu)(maindishDiv, _menu__WEBPACK_IMPORTED_MODULE_3__.main);\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.dom)(\"h4\", {\n    id: \"desserts-text\"\n}, \"Desserts\", dessertsDiv);\n(0,_dom_creation__WEBPACK_IMPORTED_MODULE_4__.createMenu)(dessertsDiv, _menu__WEBPACK_IMPORTED_MODULE_3__.desserts);\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main),\n/* harmony export */   \"appetizers\": () => (/* binding */ appetizers),\n/* harmony export */   \"desserts\": () => (/* binding */ desserts),\n/* harmony export */   \"drinks\": () => (/* binding */ drinks)\n/* harmony export */ });\nconst main = [{\n        name: 'Valentina\\'s Egg Beaters',\n        description: 'Served with Tabasco en flambé',\n        price: '$6.99'\n    },\n    {\n        name: 'Adrianna\\'s Cheez Dogz',\n        description: 'Served beneath 1 full can of Cheez Whiz',\n        price: '$11.99'\n    },\n    {\n        name: 'Tony\\'s Fucking Lo Mein',\n        description: 'Generous Portion for guaranteed leftovers',\n        price: '$7.99'\n    },\n    {\n        name: 'Sushi with Cayenne Peppah',\n        description: 'Perfect for a Date Night',\n        price: '$11.99'\n    },\n    {\n        name: 'Livia\\'s Fuckin\\' Ziti',\n        description: 'Birthday Party sized tray',\n        price: '$29.99'\n    },\n    {\n        name: 'Lincoln Log Sandwich',\n        description: 'Guaranteed to turn frowns upside down',\n        price: '$4.99'\n    },\n    {\n        name: 'New Jersey\\'s Greatest Sangwich',\n        description: 'One daily; delivery by Christopher',\n        price: '$9.99'\n    },\n    {\n        name: 'Scrambled Eggs with Sour Cream',\n        description: 'So good, this could be your last meal!',\n        price: '$5.99'\n    },\n    {\n        name: 'Artie\\'s Zuppa di Mussels',\n        description: 'Definitely fresh',\n        price: '$25.99'\n    },\n    {\n        name: 'Peppahs and Eggs Sandwich',\n        description: 'If you don\\'t order this, you\\'ll wish you did!',\n        price: '$9.99'\n    },\n    {\n        name: 'Grilled Cheese',\n        description: 'Prepared on an antique jailhouse radiator',\n        price: '$9.99'\n    },\n    {\n        name: 'Macaroni and Gravy',\n        description: 'Commendatori!',\n        price: '$14.99'\n    },\n    {\n        name: 'Quail a la Bucco',\n        description: 'Stuffed with fennel',\n        price: '$27.99'\n    },\n    {\n        name: 'Motherfuckin\\' Goddamn Orange Peel Beef',\n        description: 'Make sure you check your order',\n        price: '$11.99'\n    },\n    {\n        name: 'Janice\\'s Carmela\\'s Lasagna',\n        description: 'Bits of sweet sausage, basil under the cheese',\n        price: '$19.99'\n    },\n    {\n        name: 'Junior\\'s Favorite Spicy Chicken',\n        description: 'Worth leaving the house for',\n        price: '$14.99'\n    },\n    {\n        name: 'Gloria Trillo\\'s London Broil',\n        description: 'Aged 4 hours, served mid-air',\n        price: '$22.99'\n    },\n    {\n        name: 'Karen\\'s Last Ziti',\n        description: 'Prepared fresh, frozen for months',\n        price: '$19.99'\n    }\n]\n\n\nconst appetizers = [{\n        name: 'Stripclub Wedge of Jarslberg',\n        description: 'Aged at The Bing',\n        price: '$15.99'\n    },\n    {\n        name: 'Sil\\'s Bread',\n        description: 'Fresh from the Bread Museum',\n        price: '$4.99'\n    },\n    {\n        name: 'Burrata and Green Beans',\n        description: 'It\\'s nutty',\n        price: '$10.99'\n    },\n    {\n        name: 'The Gabagool',\n        description: 'So good, you\\'ll faint!',\n        price: '$8.99'\n    },\n    {\n        name: 'House Smoked Mozzarella',\n        description: 'The secret is in the ashes',\n        price: '$8.99'\n    },\n    {\n        name: 'The Last Supper Onion Rings',\n        description: 'Best in state, as far as I\\'m concerned',\n        price: '$10.99'\n    },\n    {\n        name: 'Meadow\\'s Summertime Hot Chili',\n        description: 'It\\'s really good chili',\n        price: '$4.99'\n    }\n]\n\nconst desserts = [{\n        name: 'Hugh\\'s Favorite Maple Walnut Icebox Cake',\n        description: 'Only available during peak hours',\n        price: '$8.99'\n    },\n    {\n        name: 'Giant Bowl of Ice Cream',\n        description: 'Perfect post-workout snack',\n        price: '$8.99'\n    },\n    {\n        name: 'Mary DeAngelis\\' Pound Cake',\n        description: 'Made with canned pears',\n        price: '$8.99'\n    },\n    {\n        name: 'Ricotta Pie ',\n        description: 'With pineapple and high school transcripts',\n        price: '$8.99'\n    },\n    {\n        name: 'Whitman\\'s Sampler',\n        description: 'Guaranteed to make you feel better',\n        price: '$11.99'\n    }\n]\n\nconst drinks = [{\n        name: 'Orange Juice',\n        description: 'Has some pulp',\n        price: '$1.99'\n    },\n    {\n        name: 'Scotch',\n        description: 'Served on the rocks',\n        price: '$10.99'\n    },\n    {\n        name: 'Appletini',\n        description: 'Served La Cerva style',\n        price: '$8.99'\n    },\n    {\n        name: 'Communion Wine',\n        description: 'Confession has never been easier!',\n        price: '$5.99'\n    },\n    {\n        name: 'Armagnac',\n        description: 'It\\'s the next vodka',\n        price: '$25.99'\n    },\n    {\n        name: 'Diet Coke',\n        description: 'Only available in 12oz cans',\n        price: '$1.99'\n    },\n    {\n        name: 'The Martina',\n        description: 'Like a martini but from Albania',\n        price: '$9.99'\n    },\n    {\n        name: 'Dirty Martini',\n        description: 'Mostly olives',\n        price: '$9.99'\n    }\n]\n\n// export {\n//     main,\n//     appetizer,\n//     dessert,\n//     drinks\n// }\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/img/artie.png":
/*!***************************!*\
  !*** ./src/img/artie.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9bd81da6bc10f6da5425.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/artie.png?");

/***/ }),

/***/ "./src/img/newjersey.png":
/*!*******************************!*\
  !*** ./src/img/newjersey.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c0755f76ccbce785c59.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/newjersey.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;