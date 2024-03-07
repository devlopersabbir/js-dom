// new DocumentFragment()
// document.createDocumentFragment()

const fnds = ["Sabbir", "Ayon", "Plabon", "Rafiul", "Tanvir", "Tahsin"];
const fragment = new DocumentFragment();
// const fragment = document.createDocumentFragment();
// frament:
//    li
//    li

const ul = document.createElement("ul"); // creating a ul

for (const fnd of fnds) {
  const createLi = document.createElement("li"); // creating a li
  createLi.textContent = fnd;
  fragment.appendChild(createLi);
}

ul.appendChild(fragment);
document.body.appendChild(ul);
console.log(fragment);
