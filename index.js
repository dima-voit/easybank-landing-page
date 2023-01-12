const body = document.querySelector("body");
const overlay = document.querySelector("#menu-overlay");
const menu = document.querySelector("#menu");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll("#menu li");

const clickFunc = () => {
  body.classList.remove("overflow-hidden");
  burger.classList.remove("open");
  menu.classList.remove("flex");
  menu.classList.add("hidden");
  overlay.classList.remove("active");
}

burger.addEventListener("click", () => {
  body.classList.toggle("overflow-hidden");
  burger.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  clickFunc();
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    clickFunc();
  });
});
