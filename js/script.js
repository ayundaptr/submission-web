const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  feather.replace();
});
