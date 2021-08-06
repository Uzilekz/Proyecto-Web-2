const menuToggle = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("menu-visible");
});