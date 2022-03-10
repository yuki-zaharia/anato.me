const sideNav = document.querySelector(".sidenav");

function toggleMenu(x) {
  x.classList.toggle("change");
  toggleSideNav();
}

function toggleSideNav() {
  if (sideNav.style.display === "block") {
    sideNav.style.display = "none";
  } else {
    sideNav.style.display = "block";
  }
}
