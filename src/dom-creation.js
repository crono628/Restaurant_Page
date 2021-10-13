function createDiv(parent, classes) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', classes);
    parent.appendChild(newDiv);
    return newDiv;
};

function createTextEl(parent, type, id, text) {
    const newEl = document.createElement(type);
    newEl.setAttribute('id', id);
    newEl.innerText = text;
    parent.appendChild(newEl);
    return newEl;
};

function createMenuItem(parent, food) {
    const item = createDiv(parent, 'food-item');
    createTextEl(item, 'h3', 'title', food.name);
    createTextEl(item, 'p', 'description', food.description);
    createTextEl(item, 'h4', 'price', food.price);
};

function createImgDiv(parent, classes, src) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', classes);
    newDiv.setAttribute('src', src);
    parent.appendChild(newDiv);
    return newDiv;
}

function createMenu(parent, array) {
    array.forEach(obj => {
        createMenuItem(parent, obj)
    });
};

function createHeader(parent, name, elements) {
    const header = document.createElement("div");
    header.setAttribute("class", `header-${name}`);
    const headerArray = [];
    elements.forEach(obj => {
        const aLink = document.createElement("a");
        aLink.setAttribute("href", `#${obj.href}`);
        aLink.innerText = obj.text;
        header.appendChild(aLink);
        headerArray.push(aLink);
    });
    parent.appendChild(header);
    return headerArray;
}

export {
    createDiv,
    createTextEl,
    createMenuItem,
    createMenu,
    createImgDiv,
    createHeader
}