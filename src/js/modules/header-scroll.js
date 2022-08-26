const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 50) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
