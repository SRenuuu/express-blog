const navbar = document.getElementById("navbar");

if (window.scrollY > 10) navbar.classList.add("scroll");
else navbar.classList.remove("scroll");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) navbar.classList.add("scroll");
  else navbar.classList.remove("scroll");
});
