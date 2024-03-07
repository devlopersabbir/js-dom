// None.cloneNode(deep) | deep -> false/true

const root = document.querySelector("ul");

const ayon = root.children[1];

const ayonCopy = ayon.cloneNode(true);

root.appendChild(ayonCopy);
