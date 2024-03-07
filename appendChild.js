// element.appendChild(aChild)
const fnds = ["Sabbir", "Ayon", "Plabon", "Rafiul", "Tanvir", "Tahsin"];

const ul = document.createElement("ul");

for (const fnd of fnds) {
  const createLi = document.createElement("li");
  createLi.textContent = fnd;
  ul.appendChild(createLi);
}

document.body.appendChild(ul);
