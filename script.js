const sideNav = document.querySelector(".sidenav");
const menuButton = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-close");
const modal = document.querySelector(".modal");
const trending = document.querySelector(".trending");
const exploreBtn = document.getElementById("explore");

// OPENING THE MENU ON CLICK
menuButton.addEventListener("click", () => {
  try {
    sideNav.classList.add("active");
    modal.classList.add("active");
  } catch (err) {
    console.log(err);
  }
});

// CLOSING MENU ON CLICK
closeMenu.addEventListener("click", () => {
  sideNav.classList.remove("active");
  modal.classList.remove("active");
});

// SMOOTH SCROLL
exploreBtn.addEventListener("click", (event) => {
  event.preventDefault();
  trending.scrollIntoView({ behavior: "smooth" });
});
