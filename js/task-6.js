function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input[type="number"]');
const createEl = document.querySelector('#controls button[data-create]');
const destroyEl = document.querySelector('#controls button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createEl.addEventListener('click', handleCreate);

function handleCreate() {
  if (createBoxes(inputEl.value)) {
    boxesEl.innerHTML = createBoxes(inputEl.value);
  }
}

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    const arrayOfDiv = [];
    let width = 30;
    let height = 30;

    for (let index = 1; index <= amount; index += 1) {
      let backgroundColor = getRandomHexColor();

      arrayOfDiv.push(
        `<div style="width:${width}px; height:${height}px; background-color:${backgroundColor}"></div>`
      );
      width += 10;
      height += 10;
    }
    return arrayOfDiv.join('');
  }
}

destroyEl.addEventListener('click', handleDestroy);

function handleDestroy() {
  destroyBoxes();
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}
