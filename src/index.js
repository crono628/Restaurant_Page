import {
    createDiv,
    createTextEl,
    createMenuItem
}

from "./dom-creation"

import * as foodArray from "./menu";

function createMenu(parent, foodArray) {
    foodArray.forEach((obj) => createMenuItem(parent, obj));
};

const content = document.querySelector('#content')

const menuArea = createDiv(content, 'menu-area')

console.log(menuArea)

content.appendChild(createMenu(menuArea, foodArray.main))