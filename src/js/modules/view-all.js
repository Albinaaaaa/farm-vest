const items = document.querySelector(".reviews__items");
const button = document.querySelector(".reviews__button");
let count = 2;
console.log([...items.children].length);

hideItems(items.children);

function checkCount(allItems) {
  return allItems.length > 2;
}

function hideItems(allItems) {
  if (checkCount(allItems)) {
    for (let i = 2; i < allItems.length; i += 1) {
      allItems[i].classList.add("hide");
    }
  }
}

function checkPresenceOfButton(btn, allItems) {
  if (checkCount(allItems)) {
    btn.classList.remove("hide");
  }
}

checkPresenceOfButton(button, items.children);

document.querySelector(".reviews__button").addEventListener("click", addItems);

function addItems() {
  for (let i = count; i < [...items.children].length; i += 1) {
    [...items.children][i].classList.remove("hide");
  }
  button.classList.add("hide");
}
