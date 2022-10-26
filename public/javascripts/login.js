const menuModal = document.getElementById("menu-modal");
const navIcon2 = document.querySelector("#nav-icon2");

navIcon2.addEventListener("click", () => {
  if (navIcon2.classList.toggle("open")) {
    menuModal.style.display = "block";
  } else {
    menuModal.style.display = "none";
  }
});
