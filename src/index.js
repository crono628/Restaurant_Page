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

const mainDiv = document.createElement('div')
mainDiv.setAttribute('class', 'content')
document.body.appendChild(mainDiv)


const menuArea = createDiv(mainDiv, 'menu-area')



mainDiv.appendChild(createMenu(menuArea, foodArray.main))