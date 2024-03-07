// Element.classList
/**
 * add()
 * remove()
 * replace()
 * toggle()
 */
const ele = document.querySelector(".heading");

const classes = ["changed", "hello", "active"];
// ele.classList.add("changed");
// ele.classList.add(...classes);
const isAdult = 17;
// ele.classList.replace("heading", "changed");
ele.classList.toggle("on", isAdult > 18);
