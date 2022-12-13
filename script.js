const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const navUser = document.querySelector(".nav_user");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navUser.classList.toggle("active");
});
