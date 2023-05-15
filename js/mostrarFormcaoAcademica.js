import store from "./redux/store.js";

export function mostrarInformacaoAcademica() {
  const informacoesAcademicas = store.getState().education;

  const table = document.querySelector(".tabela-formacao-academica");
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  table.style.display = "block";

  informacoesAcademicas.forEach((informacaoAcademica) => {
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");

    td1.innerText = informacaoAcademica.instituicao;
    td2.innerText = informacaoAcademica.curso;
    td3.innerText = informacaoAcademica.inicio;
    td4.innerText = informacaoAcademica.fim;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    tbody.appendChild(row);
  });
}
