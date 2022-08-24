let mobileMenu = document.getElementById("mobile-menu");
let bars = document.querySelectorAll(".bar");
let nav = document.querySelector(".navigation");

mobileMenu.addEventListener("click", () => {
  bars.forEach((bar) => {
    bar.classList.toggle("expand");
  });
  nav.classList.toggle("expand");
});
