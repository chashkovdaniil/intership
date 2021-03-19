let cubesCheckboxes = document.querySelectorAll(
  'input[type=checkbox][name=cube]'
);
const buttonControlCheckboxes = document.querySelector(
  '#controlCheckbox'
);
const handleClickControlButton = (checkboxes) => () => {
  if (checkCheckboxes(checkboxes)) {
    showAll(checkboxes);
    return;
  }
  hideAll(checkboxes);
}
const handleChangeCheckbox = (checkboxes) => (event) => {
  let cube = document.querySelector(`.cube#${event.target.id}`);
  let isHide = checkCheckboxes(checkboxes) ? 'show' : 'hide';

  cube.classList.toggle('cube_hide');

  toggleControlButton(isHide);
}
const toggleControlButton = (toggle) => {
  if (toggle == 'hide') {
    buttonControlCheckboxes.innerHTML = 'Hide all';
    return;
  }
  buttonControlCheckboxes.innerHTML = 'Show all';
}
const checkCheckboxes = (checkboxes) => {
  let areChecked = false;
  checkboxes.forEach(({ checked }) => {
    return checked ? areChecked = true : false
  });
  return areChecked;
}
const hideAll = (checkboxes) => {
  checkboxes.forEach((elem) => {
    let id = elem.getAttribute('id');
    let cube = document.querySelector(`.cube#${id}`);
    elem.checked = true;
    cube.classList.add('cube_hide');
  });
  toggleControlButton('show');
}
const showAll = (checkboxes) => {
  checkboxes.forEach((elem) => {
    let id = elem.getAttribute('id');
    let cube = document.querySelector(`.cube#${id}`);
    elem.checked = false;
    cube.classList.remove('cube_hide');
  });
  toggleControlButton('hide');
}

cubesCheckboxes.forEach((elem) => {
  elem.addEventListener('change', handleChangeCheckbox(cubesCheckboxes));
});
buttonControlCheckboxes.addEventListener(
  'click',
  handleClickControlButton(cubesCheckboxes)
);