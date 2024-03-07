const root = document.querySelector("nav"); // 1st

const childrenElements = root.nextElementSibling;

childrenElements.style.marginTop = `${root.clientHeight}px`;
