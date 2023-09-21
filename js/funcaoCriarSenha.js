function gerarSenha(tamanho, dado) {
  let senha = "";
  for(let loop = 0, chars = dado.length; loop < tamanho.value; loop++) {
    const randomLoop = Math.floor(Math.random() * chars);
    senha += dado.charAt(randomLoop);
  }
  return senha;
}