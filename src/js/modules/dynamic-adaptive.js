const homePlaceButton = document.querySelector(".header__actions");
const replacePlaceButton = document.querySelector(".menu__list");
const buttonsNeedReplace = document.querySelectorAll(".header__button");

function replaceElement(originBlock, block, item, width) {
  if (window.matchMedia(`(max-width: ${width}px)`).matches) {
    if (!item.classList.contains("done")) {
      block.insertBefore(item, block.lastChild);
      item.classList.add("done");
    }
  } else if (window.matchMedia(`(min-width: ${width}px)`).matches) {
    if (item.classList.contains("done")) {
      originBlock.insertBefore(item, originBlock.lastChild);
      item.classList.remove("done");
    }
  }
}

console.log("matches", window.matchMedia(`(max-width: ${768}px)`).matches);

replaceElement(homePlaceButton, replacePlaceButton, buttonsNeedReplace[0], 768);

replaceElement(homePlaceButton, replacePlaceButton, buttonsNeedReplace[1], 768);

// window.addEventListener("resize", function () {
//   const viewport = this.window.innerWidth;
//   if (viewport <= 768) {
//     if (!buttonsNeedReplace[0].classList.contains("done")) {
//       replacePlaceButton.insertBefore(
//         buttonsNeedReplace[0],
//         replacePlaceButton.lastChild
//       );
//       buttonsNeedReplace[0].classList.add("done");
//     }
//   } else {
//     if (buttonsNeedReplace[0].classList.contains("done")) {
//       homePlaceButton.insertBefore(
//         buttonsNeedReplace[0],
//         homePlaceButton.lastChild
//       );
//       buttonsNeedReplace[0].classList.remove("done");
//     }
//   }
// });
