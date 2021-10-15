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


const mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "content");
mainDiv.setAttribute("id", "welcome-text");
document.body.appendChild(mainDiv);

dom("h6", { id: "restaurant-name" }, "Nuovo Vesuvio", mainDiv);

const headerDiv = dom(
  "div",
  {
    classList: "header"
  },
  null,
  mainDiv
);

dom(
  "a",
  {
    href: "#welcome-text"
  },
  "Welcome",
  headerDiv
);

dom(
  "a",
  {
    href: "#drinks-text"
  },
  "Drinks",
  headerDiv
);

dom(
  "a",
  {
    href: "#appetizers-text"
  },
  "Appetizers",
  headerDiv
);

dom(
  "a",
  {
    href: "#main-text"
  },
  "Main Course",
  headerDiv
);

dom(
  "a",
  {
    href: "#desserts-text"
  },
  "Dessert",
  headerDiv
);

const menuDiv = dom(
  "div",
  {
    classList: "menu-div"
  },
  null,
  mainDiv
);

const drinksDiv = dom(
  "div",
  {
    classList: "drinks-div"
  },
  null,
  menuDiv
);

const appetizersDiv = dom(
  "div",
  {
    classList: "appetizers-div"
  },
  null,
  menuDiv
);

const maindishDiv = dom(
  "div",
  {
    classList: "main-div"
  },
  null,
  menuDiv
);

const dessertsDiv = dom(
  "div",
  {
    classList: "desserts-div"
  },
  null,
  menuDiv
);


dom("h4", { id: "drinks-text" }, "Drinks", drinksDiv);
createMenu(drinksDiv, foodArray.drinks);
dom("h4", { id: "appetizers-text" }, "Appetizers", appetizersDiv);
createMenu(appetizersDiv, foodArray.appetizers);
dom("h4", { id: "main-text" }, "Main Course", maindishDiv);
createMenu(maindishDiv, foodArray.main);
dom("h4", { id: "desserts-text" }, "Desserts", dessertsDiv);
createMenu(dessertsDiv, foodArray.desserts);
