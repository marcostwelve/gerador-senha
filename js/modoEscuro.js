const body = document.querySelector("body");
const btnMode = document.querySelector("i");

btnMode.addEventListener('click', function() {
  body.classList.toggle("dark");
  btnMode.classList.toggle("fa-moon");
  btnMode.classList.toggle("fa-sun");
});