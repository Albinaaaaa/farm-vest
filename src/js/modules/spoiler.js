const items = document.querySelector("[data-spoiler]");

items.addEventListener("click", function (e) {
  if (e.target.nextElementSibling.hasAttribute("data-spoiler-text")) {
    if (e.target.nextElementSibling.classList.contains("show")) {
      e.target.nextElementSibling.classList.remove("show");
      e.target.classList.remove("clicked");
      e.target.nextElementSibling.classList.add("hide");
    } else {
      e.target.nextElementSibling.classList.add("show");
      e.target.classList.add("clicked");
      e.target.nextElementSibling.classList.remove("hide");
    }
  }
});
