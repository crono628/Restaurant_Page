import {
    createTextEl,
    createDiv,
    createMenuItem,
    createMenu
}
from "./dom-creation"
import * as menuArray from "./menu";

const content = document.querySelector('#content')

const menuArea = createDiv(content, 'menu-area')


content.appendChild(createMenu(menuArea, menuArray.main))