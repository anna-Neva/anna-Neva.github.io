const pageHeader = document.querySelector(".page-header");
const menuButton = pageHeader.querySelector(".page-header__toggle");

pageHeader.classList.remove("page-header--no-js");

menuButton.addEventListener("click", function () {
  pageHeader.classList.toggle("page-header--opened");
});
