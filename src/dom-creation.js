function dom(element, attributes = {}, text, parent) {
  const elem = document.createElement(element);
  if (attributes) {
    Object.assign(elem, attributes);
  }
  if (text) {
    elem.innerText = text;
  }
  if (parent) {
    parent.appendChild(elem);
  }
  return elem;
}

function createMenuItem(parent, food) {
  const foodItem = document.createElement("div");
  foodItem.setAttribute("class", "food-item");
  dom(
    "div", {
      classList: "food-name"
    },
    food.name,
    foodItem
  );
  dom(
    "div", {
      classList: "food-description"
    },
    food.description,
    foodItem
  );
  dom(
    "div", {
      classList: "food-price"
    },
    food.price,
    foodItem
  );
  parent.appendChild(foodItem);
}

function createMenu(parent, array) {
  array.forEach((obj) => {
    createMenuItem(parent, obj);
  });
}

export {
  dom,
  createMenuItem,
  createMenu
}