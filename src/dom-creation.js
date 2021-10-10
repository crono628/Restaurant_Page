function createDiv(parent, classes) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", classes);
    parent.appendChild(newDiv);
    return newDiv;
};

function createTextEl(parent, type, classes, text) {
    const newEl = document.createElement(type);
    newEl.setAttribute("class", classes);
    newEl.innerText = text;
    parent.appendChild(newEl);
    return newEl;
};

function createMenuItem(parent, food) {
    const item = createDiv(parent, "food-item");
    createTextEl(item, "h3", "title", food.name);
    createTextEl(item, "p", "description", food.description);
    createTextEl(item, "h4", "price", food.price);
};

export {
    createDiv,
    createTextEl,
    createMenuItem
}