// Start navbar
const hamburger = document.querySelector(".hamburger");
const navMenue = document.querySelector(".main-nav__list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenue.classList.toggle("active");
});

document.querySelectorAll(".main-nav__link").forEach(
  ((n) => n.addEventListener("click"),
  () => {
    hamburger.classList.remove("active");
    navMenue.classList.remove("active");
  })
);