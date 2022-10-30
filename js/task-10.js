function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elem = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");
const inputEl = elem.firstElementChild;
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");

function create() {
  const amount = inputEl.value;
  return createBoxes(amount);
}

function destroyBoxes() {
  inputEl.value = "";
  boxesEl.innerHTML = "";
}

function createBoxes(amount) {
  const markup = [];
  for (let i = 0; i < amount; i += 1) {
    let size = 30 + 10 * i;
    const divBox = document.createElement("div");
    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    markup.push(divBox);
  }
  boxesEl.append(...markup);
}

inputEl.addEventListener("input", (e) => e.currentTarget.value);
createEl.addEventListener("click", create);
destroyEl.addEventListener("click", destroyBoxes);
