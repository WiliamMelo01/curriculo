import store from "./redux/store.js";

export function mostrarInformacaoExperienciaProfissional() {
  const experienciasProfissionais = store.getState().experience;

  console.log(experienciasProfissionais);

  const table = document.querySelector(".tabela-experiencia-profissional");
  const tbody = document.querySelector(".tabela-formacao-academica-tbody");
  tbody.innerHTML = "";

  table.style.display = "block";

  experienciasProfissionais.forEach((experiencia) => {
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    td1.innerText = experiencia.nomeEmpresa;
    td2.innerText = experiencia.cargo;
    td3.innerText = experiencia.responsabilidadesAtribuicoes;
    td4.innerText = experiencia.inicio;
    td5.innerText = experiencia.fim;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    tbody.appendChild(row);

  });
}
