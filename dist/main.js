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

/***/ "./src/dom-creation.js":
/*!*****************************!*\
  !*** ./src/dom-creation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDiv\": () => (/* binding */ createDiv),\n/* harmony export */   \"createTextEl\": () => (/* binding */ createTextEl),\n/* harmony export */   \"createMenuItem\": () => (/* binding */ createMenuItem),\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu),\n/* harmony export */   \"createImgDiv\": () => (/* binding */ createImgDiv),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\nfunction createDiv(parent, classes) {\n    const newDiv = document.createElement('div');\n    newDiv.setAttribute('class', classes);\n    parent.appendChild(newDiv);\n    return newDiv;\n};\n\nfunction createTextEl(parent, type, id, text) {\n    const newEl = document.createElement(type);\n    newEl.setAttribute('id', id);\n    newEl.innerText = text;\n    parent.appendChild(newEl);\n    return newEl;\n};\n\nfunction createMenuItem(parent, food) {\n    const item = createDiv(parent, 'food-item');\n    createTextEl(item, 'h3', 'title', food.name);\n    createTextEl(item, 'p', 'description', food.description);\n    createTextEl(item, 'h4', 'price', food.price);\n};\n\nfunction createImgDiv(parent, classes, src) {\n    const newDiv = document.createElement('div');\n    newDiv.setAttribute('class', classes);\n    newDiv.setAttribute('src', src);\n    parent.appendChild(newDiv);\n    return newDiv;\n}\n\nfunction createMenu(parent, array) {\n    array.forEach(obj => {\n        createMenuItem(parent, obj)\n    });\n};\n\nfunction createHeader(parent, name, elements) {\n    const header = document.createElement(\"div\");\n    header.setAttribute(\"class\", `header-${name}`);\n    const headerArray = [];\n    elements.forEach(obj => {\n        const aLink = document.createElement(\"a\");\n        aLink.setAttribute(\"href\", `#${obj.href}`);\n        aLink.innerText = obj.text;\n        header.appendChild(aLink);\n        headerArray.push(aLink);\n    });\n    parent.appendChild(header);\n    return headerArray;\n}\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/dom-creation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-creation */ \"./src/dom-creation.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nconst mainDiv = document.createElement('div')\nmainDiv.setAttribute('class', 'content')\ndocument.body.appendChild(mainDiv)\n\n;(0,_dom_creation__WEBPACK_IMPORTED_MODULE_0__.createHeader)(mainDiv, \"area\", [{\n        href: \"drinks-text\",\n        text: \"Drinks\"\n    },\n    {\n        href: \"appetizer-text\",\n        text: \"Appetizers\"\n    },\n    {\n        href: \"main-text\",\n        text: \"Main Course\"\n    },\n    {\n        href: \"dessert-text\",\n        text: \"Dessert\"\n    }\n]);\n\nfunction menuSection(parent, array, id) {\n    const newDiv = (0,_dom_creation__WEBPACK_IMPORTED_MODULE_0__.createDiv)(parent, \"menu-section\");\n    newDiv.setAttribute(\"id\", id);\n    const menuArea = (0,_dom_creation__WEBPACK_IMPORTED_MODULE_0__.createDiv)(newDiv, \"menu-area\");\n    (0,_dom_creation__WEBPACK_IMPORTED_MODULE_0__.createMenu)(menuArea, array);\n}\n\nconst textSectionDrink = (0,_dom_creation__WEBPACK_IMPORTED_MODULE_0__.createTextEl)(mainDiv, 'div', 'drinks-text', \"Drinks\")\nconst textSectionAppetizer = (0,_dom_creation__WEBPACK_IMPORTED_MODULE_0__.createTextEl)(mainDiv, 'div', 'appetizer-text', \"Appetizer\")\nconst textSectionMain = (0,_dom_creation__WEBPACK_IMPORTED_MODULE_0__.createTextEl)(mainDiv, 'div', 'main-text', \"Main Course\")\nconst textSectionDessert = (0,_dom_creation__WEBPACK_IMPORTED_MODULE_0__.createTextEl)(mainDiv, 'div', 'dessert-text', \"Dessert\")\nmenuSection(textSectionDrink, _menu__WEBPACK_IMPORTED_MODULE_1__.drinks, \"drinks\");\nmenuSection(textSectionAppetizer, _menu__WEBPACK_IMPORTED_MODULE_1__.appetizer, \"appetizer\");\nmenuSection(textSectionMain, _menu__WEBPACK_IMPORTED_MODULE_1__.main, \"main\");\nmenuSection(textSectionDessert, _menu__WEBPACK_IMPORTED_MODULE_1__.dessert, \"dessert\");\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main),\n/* harmony export */   \"appetizer\": () => (/* binding */ appetizer),\n/* harmony export */   \"dessert\": () => (/* binding */ dessert),\n/* harmony export */   \"drinks\": () => (/* binding */ drinks)\n/* harmony export */ });\nconst main = [{\n        name: 'Valentina\\'s Egg Beaters',\n        description: 'Served with Tabasco en flambé',\n        price: '$6.99'\n    },\n    {\n        name: 'Adrianna\\'s Cheez Dogz',\n        description: '2 Weiners and 2 Buns served beneath 1 full can of Cheez Whiz',\n        price: '$11.99'\n    },\n    {\n        name: 'Tony\\'s Fucking Lo Mein',\n        description: 'Generous Portion for guaranteed leftovers',\n        price: '$7.99'\n    },\n    {\n        name: 'Sushi with Cayenne Peppah',\n        description: 'Perfect for a Date Night',\n        price: '$11.99'\n    },\n    {\n        name: 'Livia\\'s Fuckin\\' Ziti',\n        description: 'Birthday Party sized tray',\n        price: '$29.99'\n    },\n    {\n        name: 'Lincoln Log Sandwich',\n        description: 'Guaranteed to turn frowns upside down',\n        price: '$4.99'\n    },\n    {\n        name: 'New Jersey\\'s Greatest Sangwich',\n        description: 'One daily; delivery by Christopher',\n        price: '$9.99'\n    },\n    {\n        name: 'Scrambled Eggs with Sour Cream',\n        description: 'So good, this could be your last meal!',\n        price: '$5.99'\n    },\n    {\n        name: 'Artie\\'s Zuppa di Mussels',\n        description: 'Definitely fresh',\n        price: '$25.99'\n    },\n    {\n        name: 'Peppahs and Eggs Sandwich',\n        description: 'If you don\\'t order this, you\\'ll wish you did!',\n        price: '$9.99'\n    },\n    {\n        name: 'Grilled Cheese',\n        description: 'Prepared on an antique jailhouse radiator',\n        price: '$9.99'\n    },\n    {\n        name: 'Macaroni and Gravy',\n        description: 'Commendatori!',\n        price: '$14.99'\n    },\n    {\n        name: 'Quail a la Bucco',\n        description: 'Stuffed with fennel',\n        price: '$27.99'\n    },\n    {\n        name: 'Motherfuckin\\' Goddamn Orange Peel Beef',\n        description: 'Make sure you check your order',\n        price: '$11.99'\n    },\n    {\n        name: 'Janice\\'s Carmela\\'s Lasagna',\n        description: 'Bits of sweet sausage, layer of basil leaves under the cheese',\n        price: '$19.99'\n    },\n    {\n        name: 'Junior\\'s Favorite Spicy Chicken',\n        description: 'Worth leaving the house for',\n        price: '$14.99'\n    },\n    {\n        name: 'Gloria Trillo\\'s London Broil',\n        description: 'Aged 4 hours, served mid-air',\n        price: '$22.99'\n    },\n    {\n        name: 'Karen\\'s Last Ziti',\n        description: 'Prepared fresh, frozen for months',\n        price: '$19.99'\n    }\n]\n\n\nconst appetizer = [{\n        name: 'Stripclub Wedge of Jarslberg',\n        description: 'Aged at The Bing',\n        price: '$15.99'\n    },\n    {\n        name: 'Sil\\'s Bread',\n        description: 'Fresh from the Bread Museum',\n        price: '$4.99'\n    },\n    {\n        name: 'Burrata and Green Beans',\n        description: 'It\\'s nutty',\n        price: '$10.99'\n    },\n    {\n        name: 'The Gabagool',\n        description: 'So good, you\\'ll faint!',\n        price: '$8.99'\n    },\n    {\n        name: 'House Smoked Mozzarella',\n        description: 'The secret is in the ashes',\n        price: '$8.99'\n    },\n    {\n        name: 'The Last Supper Onion Rings',\n        description: 'Best in state, as far as I\\'m concerned',\n        price: '$10.99'\n    },\n    {\n        name: 'Meadow\\'s Summertime Hot Chili',\n        description: 'It\\'s really good chili',\n        price: '$4.99'\n    }\n]\n\nconst dessert = [{\n        name: 'Hugh\\'s Favorite Maple Walnut Icebox Cake',\n        description: 'Only available during peak hours',\n        price: '$8.99'\n    },\n    {\n        name: 'Giant Bowl of Ice Cream',\n        description: 'Perfect post-workout snack',\n        price: '$8.99'\n    },\n    {\n        name: 'Mary DeAngelis\\' Pound Cake',\n        description: 'Made with canned pears',\n        price: '$8.99'\n    },\n    {\n        name: 'Ricotta Pie ',\n        description: 'With pineapple and high school transcripts',\n        price: '$8.99'\n    },\n    {\n        name: 'Whitman\\'s Sampler',\n        description: 'Guaranteed to make you feel better',\n        price: '$11.99'\n    }\n]\n\nconst drinks = [{\n        name: 'Orange Juice',\n        description: 'Has some pulp',\n        price: '$1.99'\n    },\n    {\n        name: 'Scotch',\n        description: 'Served on the rocks',\n        price: '$10.99'\n    },\n    {\n        name: 'Appletini',\n        description: 'Served La Cerva style',\n        price: '$8.99'\n    },\n    {\n        name: 'Communion Wine',\n        description: 'Confession has never been easier!',\n        price: '$5.99'\n    },\n    {\n        name: 'Armagnac',\n        description: 'It\\'s the next vodka',\n        price: '$25.99'\n    },\n    {\n        name: 'Diet Coke',\n        description: 'Only available in 12oz cans',\n        price: '$1.99'\n    },\n    {\n        name: 'The Martina',\n        description: 'Like a martini but from Albania',\n        price: '$9.99'\n    },\n    {\n        name: 'Dirty Martini',\n        description: 'Mostly olives',\n        price: '$9.99'\n    }\n]\n\n// export {\n//     main,\n//     appetizer,\n//     dessert,\n//     drinks\n// }\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

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