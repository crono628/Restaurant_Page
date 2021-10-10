import {
    createDiv,
    createTextEl,
    createMenuItem
}
from "./dom-creation"

import * as foodArray from "./menu";

const createMenu = (parent, foodArray) => {
    foodArray.forEach((obj) => createMenuItem(parent, obj));
};

const content = document.querySelector('#content')

const menuArea = createDiv(content, 'menu-area')

document.body.appendChild(createMenu(menuArea, foodArray.main))