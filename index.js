function burgerMenu() {
  const nav = document.querySelector("#menu-overlay")
  const menu = document.querySelector("#menu");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    nav.classList.toggle("active");
  });
};

burgerMenu();
