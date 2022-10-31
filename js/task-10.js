function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls input');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');

let count = 0;
let size = 0;

const createBoxes = () => {
  const markup = [];
  const amount = inputEl.value;

  for (let i = 0; i < amount; i += 1) {
    const divBox = document.createElement('div');

    size += size > 0 ? 10 : 30;

    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;
    divBox.style.backgroundColor = getRandomHexColor();

    markup.push(divBox);

    // console.group(`divBox ${++count}`);
    // console.log(`size: ${size}x${size}px\nbgc: ${divBox.style.backgroundColor}`);
    // console.groupEnd();
  }
  boxesEl.append(...markup);
};

const destroyBoxes = () => {
  boxesEl.innerHTML = '';
  inputEl.value = '';
  size = 0;
  count = 0;
  // console.clear();
};

createEl.addEventListener('click', createBoxes);
destroyEl.addEventListener('click', destroyBoxes);
