import css from './styles/style.css'
import newjersey from './img/newjersey.png'
import artie from './img/artie.png'
import * as foodArray from "./menu";
import {
    dom,
    createMenuItem,
    createMenu
}
from "./dom-creation"

const mainDiv = document.createElement('div')
mainDiv.setAttribute('class', 'content')
mainDiv.setAttribute('id', 'welcome-text')
document.body.appendChild(mainDiv)

const headerDiv = dom('div', {
    classList: 'header'
}, null, mainDiv)

dom('a', {
    href: "#welcome-text"
}, 'Welcome', headerDiv)

dom('a', {
    href: "#drinks-text"
}, 'Drinks', headerDiv)

dom('a', {
    href: "#appetizers-text"
}, 'Appetizers', headerDiv)

dom('a', {
    href: "#main-text"
}, 'Main Course', headerDiv)

dom('a', {
    href: "#desserts-text"
}, 'Dessert', headerDiv)

const menuDiv = dom('div', {
    classList: 'menu-div'
}, null, mainDiv)

const drinksDiv = dom('div', {
    classList: 'drinks-div',
    id: 'drinks-text'
}, 'Drinks', menuDiv)

const appetizersDiv = dom('div', {
    classList: 'appetizers-div',
    id: 'appetizers-text'
}, 'Appetizers', menuDiv)

const maindishDiv = dom('div', {
    classList: 'main-div',
    id: 'main-text'
}, 'Main Course', menuDiv)

const dessertsDiv = dom('div', {
    classList: 'desserts-div',
    id: 'desserts-text'
}, 'Desserts', menuDiv)


createMenu(drinksDiv, foodArray.drinks)
createMenu(appetizersDiv, foodArray.appetizers)
createMenu(maindishDiv, foodArray.main)
createMenu(dessertsDiv, foodArray.desserts)

// createHeader(mainDiv, "area", [{
//         href: "welcome-text",
//         text: "Welcome"
//     },
//     {
//         href: "drinks-text",
//         text: "Drinks"
//     },
//     {
//         href: "appetizer-text",
//         text: "Appetizers"
//     },
//     {
//         href: "main-text",
//         text: "Main Course"
//     },
//     {
//         href: "dessert-text",
//         text: "Dessert"
//     }
// ]);

// function menuSection(parent, array, id) {
//     const newDiv = createDiv(parent, "menu-section");
//     newDiv.setAttribute("id", id);
//     const menuArea = createDiv(newDiv, "menu-area");
//     createMenu(menuArea, array);
// }



// const textSectionWelcome = createTextEl(mainDiv, 'div', 'welcome-text', "Nuovo Vesuvio")
// const textSectionDrink = createTextEl(mainDiv, 'div', 'drinks-text', "Drinks")
// const textSectionAppetizer = createTextEl(mainDiv, 'div', 'appetizer-text', "Appetizer")
// const textSectionMain = createTextEl(mainDiv, 'div', 'main-text', "Main Course")
// const textSectionDessert = createTextEl(mainDiv, 'div', 'dessert-text', "Dessert")
// // createImgDiv(textSectionWelcome, 'artie', artie)
// menuSection(textSectionDrink, foodArray.drinks, "drinks");
// menuSection(textSectionAppetizer, foodArray.appetizer, "appetizer");
// menuSection(textSectionMain, foodArray.main, "main");
// menuSection(textSectionDessert, foodArray.dessert, "dessert");