function dom(element, attributes = {}, text, parent) {
    const elem = document.createElement(element);
    if (attributes) {
        Object.assign(elem, attributes);
    };
    if (text) {
        elem.innerText = text;
    };
    if (parent) {
        parent.appendChild(elem)
    }
    return elem
}

function createMenuItem(parent, food) {
    const foodItem = document.createElement('div')
    foodItem.setAttribute('class', 'food-item')
    dom('div', {
        classList: 'food-name'
    }, food.name, foodItem)
    dom('div', {
        classList: 'food-description'
    }, food.description, foodItem)
    dom('div', {
        classList: 'food-price'
    }, food.price, foodItem)
    parent.appendChild(foodItem)
};

function createMenu(parent, array) {
    array.forEach(obj => {
        createMenuItem(parent, obj)
    });
};

// function createHeader(parent, name, elements) {
//     const header = document.createElement("div");
//     header.setAttribute("class", `header-${name}`);
//     const headerArray = [];
//     elements.forEach(obj => {
//         const aLink = document.createElement("a");
//         aLink.setAttribute("href", `#${obj.href}`);
//         aLink.innerText = obj.text;
//         header.appendChild(aLink);
//         headerArray.push(aLink);
//     });
//     parent.appendChild(header);
//     return headerArray;
// }

export {
    dom,
    createMenuItem,
    createMenu
}