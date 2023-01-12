function burgerMenu() {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const overlay = document.querySelector("#menu-overlay");
  const menu = document.querySelector("#menu");
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelectorAll("#menu li");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    body.classList.toggle("overflow-hidden");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    body.classList.remove("overflow-hidden");
    burger.classList.remove("open");
    menu.classList.remove("flex");
    menu.classList.add("hidden");
    overlay.classList.remove("active");
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      burger.classList.remove("open");
      menu.classList.remove("flex");
      navLinks.forEach(el => {
        el.classList.remove("open");
      });
      body.classList.remove("overflow-hidden");
      menu.classList.add("hidden");
      overlay.classList.remove("active");
    });
  });
};

burgerMenu();
