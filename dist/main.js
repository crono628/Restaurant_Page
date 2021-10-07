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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\nconst content = document.querySelector('#content')\n\nfunction component() {\n    const element = document.createElement('div')\n    element.innerHTML = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.tester)('mikey')\n    return element;\n}\n\ncontent.appendChild(component())\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu),\n/* harmony export */   \"tester\": () => (/* binding */ tester)\n/* harmony export */ });\nlet menu = [{\n        'name': 'Stripclub Wedge of Jarslberg',\n        'description': 'Aged at The Bing',\n        'price': '$15.99',\n        'course': 'appetizer'\n    },\n    {\n        'name': 'Valentina\\'s Egg Beaters',\n        'description': 'Served with Tabasco en flambé',\n        'price': '$6.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Adrana\\'s Cheez Dogz',\n        'description': '2 Weiners and 2 Buns served beneath 1 full can of Cheez Whiz',\n        'price': '$11.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Sil\\'s Bread',\n        'description': 'Fresh from the Bread Museum',\n        'price': '$4.99/basket',\n        'course': 'appetizer'\n    },\n    {\n        'name': 'Tony\\'s Fucking Lo Mein',\n        'description': 'Generous Portion for guaranteed leftovers',\n        'price': '$7.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Sushi with Cayenne Peppah',\n        'description': 'Perfect for a Date Night',\n        'price': '$11.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Livia\\'s Fuckin\\' Ziti',\n        'description': 'Birthday Party sized tray',\n        'price': '$29.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Lincoln Log Sandwich',\n        'description': 'Guaranteed to turn frowns upside down',\n        'price': '$4.99',\n        'course': 'main'\n    },\n    {\n        'name': 'New Jersey\\'s Greatest Sangwich',\n        'description': 'Only 1 available daily whenever Christopher feels like delivering it',\n        'price': '$9.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Scrambled Eggs with Sour Cream',\n        'description': 'So good, this could be your last meal!',\n        'price': '$5.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Artie\\'s Zuppa di Mussels',\n        'description': 'Fresh',\n        'price': '$25.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Junior\\'s Peppahs and Eggs Sandwich',\n        'description': 'If you don\\'t order this, you\\'ll wish you did!',\n        'price': '$9.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Grilled Cheese',\n        'description': 'Prepared on an antique jailhouse radiator',\n        'price': '$9.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Macaroni and Gravy',\n        'description': 'Commendatori!',\n        'price': '$14.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Quail a la Bucco',\n        'description': 'Stuffed with fennel',\n        'price': '$27.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Giant Bowl of Ice Cream',\n        'description': 'Served with a spatula for consumption ease',\n        'price': '$8.99',\n        'course': 'dessert'\n    },\n    {\n        'name': 'Motherfuckin\\' Goddamn Orange Peel Beef',\n        'description': 'Make sure you check your order',\n        'price': '$11.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Janice\\'s Carmela\\'s Lasagna',\n        'description': 'Little bits of sweet sausage, layer of basil leaves right under the cheese',\n        'price': '$19.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Burrata and Green Beans',\n        'description': 'It\\'s nutty',\n        'price': '$10.99',\n        'course': 'appetizer'\n    },\n    {\n        'name': 'Meadow\\'s Summertime Hot Chili',\n        'description': 'It\\'s really good chili',\n        'price': '$4.99',\n        'course': 'main'\n    },\n    {\n        'name': 'Hugh\\'s Favorite Maple Walnut Icebox Cake',\n        'description': 'Only available during peak hours',\n        'price': '$8.99',\n        'course': 'dessert'\n    },\n    {\n        'name': 'Gloria Trillo\\'s London Broil',\n        'description': 'Served mid-air',\n        'price': '$22.99',\n        'course': 'main'\n    },\n    {\n        'name': 'The Gabagool',\n        'description': 'So good, you\\'ll faint!',\n        'price': '$8.99',\n        'course': 'appetizer'\n    },\n    {\n        'name': 'Fresh Mozzarella',\n        'description': 'The secret is in the ashes',\n        'price': '$8.99',\n        'course': 'appetizer'\n    },\n    {\n        'name': 'Junior\\'s Favorite Spicy Chicken',\n        'description': 'Worth leaving the house for',\n        'price': '$14.99',\n        'course': 'main'\n    },\n    {\n        'name': 'The Last Supper Onion Rings',\n        'description': 'Don\\'t Stop Believing',\n        'price': '$10.99',\n        'course': 'appetizer'\n    }\n]\n\nconst tester = (name) => `TESTING ${name}`\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;