const button = document.querySelector(".menu-burger");

button.addEventListener("click", function () {
  button.classList.toggle("active");

  if (button.classList.contains("active")) {
    document.querySelector(".menu__body").style.left = 0;
  } else {
    document.querySelector(".menu__body").style.left = "-100%";
  }
});
