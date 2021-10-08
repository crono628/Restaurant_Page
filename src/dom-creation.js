const createDiv = (parent, classes) => {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', classes)
    parent.appendChild(newDiv)
    return newDiv
}

const createTextEl = (parent, type, classes, text) => {
    const newEl = document.createElement(type)
    newEl.setAttribute('class', classes)
    newEl.innerText = text
    parent.appendChild(newEl)
    return newEl
}

const createMenuItem = (parent, food) => {
    const item = createDiv(parent, "food-item");
    createTextEl(item, "h3", "food-card__title", food.name);
    createTextEl(item, "h4", "food-card__price", food.price);
    createTextEl(item, "p", "food-card__desc", food.description);
}

const createMenu = (parent, menuArray) => {
    parent.innerText = "";

    menuArray.forEach((obj) => createMenuItem(parent, obj))
}

export {
    createTextEl,
    createDiv,
    createMenuItem,
    createMenu
}