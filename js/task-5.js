function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const btnEL = document.querySelector('.change-color');
const colorEL = document.querySelector('.color');

btnEL.addEventListener('click', handleChangeColor);

function handleChangeColor(event) {
  colorEL.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEL.textContent;
}
