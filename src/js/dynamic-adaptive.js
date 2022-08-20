const homePlaceButton = document.querySelector(".header__actions");
const replacePlaceButton = document.querySelector(".menu__list");
const buttonsNeedReplace = document.querySelectorAll(".header__button");

function replaceElement(originBlock, block, item, width) {
  if (window.matchMedia(`(max-width: ${width}px).matches`)) {
    if (!item.classList.contains("done")) {
      block.insertBefore(item, block.lastChild);
      item.classList.add("done");
    }
  } else {
    if (item.classList.contains("done")) {
      originBlock.insertBefore(item, originBlock.lastChild);
      item.classList.remove("done");
    }
  }
}

replaceElement(homePlaceButton, replacePlaceButton, buttonsNeedReplace[0], 768);

replaceElement(homePlaceButton, replacePlaceButton, buttonsNeedReplace[1], 768);
