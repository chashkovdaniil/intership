let checkboxesCubes = document.querySelector('.checkboxesCubes');
const buttonControlCheckboxes = document.querySelector(
  '#controlCheckbox'
);
buttonControlCheckboxes.dataset.hidden = false;
const getCubeByCheckbox = (checkbox) => {
  let cubeId = checkbox.dataset.cubeId;
  return document.querySelector(`div[id="cube"][data-cube-id="${cubeId}"]`);
}
const hideCube = (cube, condition) => {
  if (condition) {
    cube.classList.add('cube_hide');
    return;
  }
  cube.classList.remove('cube_hide');
}
checkboxesCubes.addEventListener('click', (event) => {
  if (event.target.type == "checkbox") {
    let cube = getCubeByCheckbox(event.target);
    hideCube(cube, !cube.classList.contains('cube_hide'));
  }
});
buttonControlCheckboxes.addEventListener('click', () => {
  let hidden = buttonControlCheckboxes.dataset.hidden === "false";
  let checkboxes = checkboxesCubes.children;
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].children[0].checked = hidden;
    let cube = getCubeByCheckbox(checkboxes[i].children[0]);
    hideCube(cube, hidden);
  }
  buttonControlCheckboxes.dataset.hidden = hidden;
  if(hidden) {
    buttonControlCheckboxes.innerHTML = "Show";
    return;
  }
  buttonControlCheckboxes.innerHTML = "Hide";
});