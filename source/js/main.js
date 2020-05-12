var header = document.querySelector(".main-nav");
var toggleBtn = document.querySelector(".main-nav__toggle");

toggleBtn.classList.remove("visually-hidden");
header.classList.add("visually-hidden");

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("main-nav__toggle--gamburger");
  toggleBtn.classList.toggle("main-nav__toggle--close");

  toggleBtn.classList.contains("main-nav__toggle--gamburger")
    ? header.classList.add("visually-hidden")
    : header.classList.remove("visually-hidden");
});
