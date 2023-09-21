const radios = document.querySelectorAll("input[name=options]");
const btnSubmit = document.querySelector(".button");
const range = document.getElementById("vol");
const inputSenha = document.getElementById("isenha");
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMaiusculas = letrasMinusculas.toUpperCase();
const numeros = "0123456789";
const caracteresEspeciais = "!@#$%&*/?_+";
let senha = "";

btnSubmit.addEventListener('click', function() {
 let dados = "";
 let click = false;
  radios.forEach(function(radio) {
    if(radio.checked) {
      click = true;
      if(radio.value == "A") {
        dados += letrasMaiusculas;
      }
      if(radio.value == "a") {
        dados += letrasMinusculas;
      }
      if(radio.value == "1") {
        dados += numeros;
      }
      if(radio.value == "@") {
        dados += caracteresEspeciais;
      }
    }
  });
  senha = gerarSenha(range, dados);
  const divSenhaGerada = document.querySelector(".senha");
  inputSenha.value = senha;
  divSenhaGerada.classList.remove("hidden");

  if(!click || range.value < 8) {
    alert("É necessário escolher quais elementos você quer na sua senha!\nE o tamanho escolhido precisa ser maior que 8");
    divSenhaGerada.classList.add("hidden");
  }
});

async function copiarSenha() {
  
  await navigator.clipboard.writeText(senha)
  .then(() => {
    alert("Senha copiada com sucesso!");
  })
  .catch(error => {
    alert("Erro ao copiar a senha: " + error);
  });
}
