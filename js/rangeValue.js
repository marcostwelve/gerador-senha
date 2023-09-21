const rangeTexto = document.querySelector(".range__value");
const vol = document.getElementById("vol");
vol.addEventListener('input', function() {
  rangeTexto.textContent = this.value;
});
