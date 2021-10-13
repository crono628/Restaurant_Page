import css from './styles/style.css'
import newjersey from './img/newjersey.png'
import {
    createDiv,
    createMenu,
    createTextEl,
    createHeader
}
from "./dom-creation"

import * as foodArray from "./menu";

const mainDiv = document.createElement('div')
mainDiv.setAttribute('class', 'content')
document.body.appendChild(mainDiv)

createHeader(mainDiv, "area", [{
        href: "drinks-text",
        text: "Drinks"
    },
    {
        href: "appetizer-text",
        text: "Appetizers"
    },
    {
        href: "main-text",
        text: "Main Course"
    },
    {
        href: "dessert-text",
        text: "Dessert"
    }
]);

function menuSection(parent, array, id) {
    const newDiv = createDiv(parent, "menu-section");
    newDiv.setAttribute("id", id);
    const menuArea = createDiv(newDiv, "menu-area");
    createMenu(menuArea, array);
}

const textSectionDrink = createTextEl(mainDiv, 'div', 'drinks-text', "Drinks")
const textSectionAppetizer = createTextEl(mainDiv, 'div', 'appetizer-text', "Appetizer")
const textSectionMain = createTextEl(mainDiv, 'div', 'main-text', "Main Course")
const textSectionDessert = createTextEl(mainDiv, 'div', 'dessert-text', "Dessert")
menuSection(textSectionDrink, foodArray.drinks, "drinks");
menuSection(textSectionAppetizer, foodArray.appetizer, "appetizer");
menuSection(textSectionMain, foodArray.main, "main");
menuSection(textSectionDessert, foodArray.dessert, "dessert");