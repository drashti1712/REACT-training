import './style.css'; // css-loader loads this
import add, { subtract } from './lib'; // babel-loader
import Welcome from './Welcome';
console.log("Hello Web World!!!");

Promise.resolve(42).then(it => console.log(it));

console.log(add(3, 4));

console.log(subtract(40, 3));

render(Welcome, document.getElementById("root"));

function render(element, container) {
    if(['string', 'number'].includes(typeof element)) {
        container.appendChild(document.createTextNode(String(element)));
        return;
    }
    let domElement = document.createElement(element.tag);
    if(element.props.children) {
        element.props.children.forEach(child => render(child, domElement));
    }
    container.appendChild(domElement);
    console.log(container);
}