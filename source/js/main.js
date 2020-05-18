var header = document.querySelector(".main-nav");
var toggleBtn = document.querySelector(".main-nav__toggle");
var firstScreen = document.querySelector(".first-screen");
var pageHeader = document.querySelector(".page-header");
var pageHeaderTop = document.querySelector(".page-header__top");

toggleBtn.classList.remove("visually-hidden");
header.classList.add("visually-hidden");
firstScreen.classList.remove("first-screen--no-js")
pageHeader.style.background = "rgba(0, 0, 0, 0.3)";
pageHeaderTop.style.borderBottom = "none";

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("main-nav__toggle--gamburger");
  toggleBtn.classList.toggle("main-nav__toggle--close");

  if (toggleBtn.classList.contains("main-nav__toggle--gamburger")) {
    header.classList.add("visually-hidden");
    firstScreen.classList.remove("first-screen--no-js");
    pageHeader.style.background = "rgba(0, 0, 0, 0.3)";
    pageHeaderTop.style.borderBottom = "none";
  } else {
    header.classList.remove("visually-hidden");
    firstScreen.classList.add("first-screen--no-js");
    pageHeader.style.background = "#283645";
    pageHeaderTop.style.borderBottom = "1px solid #000";
  }
});
