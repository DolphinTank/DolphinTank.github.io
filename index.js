let navItems = document.getElementsByClassName("nav-items");
let ham = document.getElementById("ham");

ham.addEventListener("click", () => {
  if (navItems[0].style.display === "flex") {
    navItems[0].style.display = "none";
  } else {
    navItems[0].style.display = "flex";
  }
});
