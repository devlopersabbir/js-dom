// insertBefore(newNode, referenceNode)

const root = document.querySelector("#root");
const rafi = document.querySelector("#rafi");

const ayon = document.createElement("li");
ayon.textContent = "Ayon";

root.insertBefore(ayon, rafi);
