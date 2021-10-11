import {
    createDiv,
    createMenu,
    createImgDiv
}
from "./dom-creation"

import * as foodArray from "./menu";

const mainDiv = document.createElement('div')
mainDiv.setAttribute('class', 'content')
document.body.appendChild(mainDiv)

const menuArea = createDiv(mainDiv, 'menu-area')
createMenu(menuArea, foodArray.main)