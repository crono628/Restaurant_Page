import {
    menu,
    tester
} from "./menu";

const content = document.querySelector('#content')

function component() {
    const element = document.createElement('div')
    element.innerHTML = tester('mikey')
    return element;
}

content.appendChild(component())