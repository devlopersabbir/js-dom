// Element.setAttribute(name, value)
const createElement = document.createElement("input");
createElement.setAttribute("placeholder", "Enter your name");
createElement.setAttribute("class", "input_box");

document.querySelector("button").setAttribute("disabled");

// append
document.body.appendChild(createElement);
