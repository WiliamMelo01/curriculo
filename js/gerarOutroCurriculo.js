const buttonGerarOutroCurriculo = document.querySelector("#gerar_outro_curriculo");

buttonGerarOutroCurriculo.addEventListener("click", () => {
  localStorage.clear();

  window.location.href = "index.html";
});
