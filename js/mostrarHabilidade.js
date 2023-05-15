import { removeSkill } from "./redux/reducers.js";
import store from "./redux/store.js";

export function mostrarHabilidades() {
  const listHabilidades = document.querySelector(".lista-habilidades");

  listHabilidades.innerHTML = "";

  const habilidades = store.getState().skills;

  habilidades.forEach((habilidade) => {
    const div = document.createElement("div");

    div.innerText = habilidade;

    div.classList.add("habilidade");

    listHabilidades.appendChild(div);
  });
}
