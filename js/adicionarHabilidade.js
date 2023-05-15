import { mostrarHabilidades } from "./mostrarHabilidade.js";
import { setSkills } from "./redux/reducers.js";
import store from "./redux/store.js";

export function addSkill() {
  const skills = document.querySelector("#habilidades");

  const habilidade = skills.value;
  skills.value = "";
  skills.focus();

  store.dispatch(setSkills(habilidade));

  mostrarHabilidades();
}
