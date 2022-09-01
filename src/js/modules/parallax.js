const items = document.querySelectorAll(".icons-main-block__item");

function parallax(event) {
  this.querySelectorAll(".icons-main-block__item").forEach((element) => {
    let speed = element.getAttribute("data-speed");
    element.style.transform = `translate(${(event.clientX * speed) / 1000}px, ${
      (event.clientY * speed) / 1000
    }px)`;
  });
}

document.addEventListener("mousemove", parallax);
