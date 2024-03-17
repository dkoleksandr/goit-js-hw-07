const inptutEL = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inptutEL.addEventListener('input', handleChangeGreting);

function handleChangeGreting(event) {
  !event.currentTarget.value.trim()
    ? (spanEl.textContent = 'Anonymous')
    : (spanEl.textContent = event.currentTarget.value);
}
