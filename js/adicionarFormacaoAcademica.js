import { mostrarInformacaoAcademica } from "./mostrarFormcaoAcademica.js";
import { setAcademicEducation } from "./redux/reducers.js";
import store from "./redux/store.js";

export function addAcademicEducation() {
  const instituicao = document.querySelector("#instituicao");
  const curso = document.querySelector("#curso");
  const inicio = document.querySelector("#inicio");
  const fim = document.querySelector("#fim");

  const FormacaoAcademica = {
    instituicao: instituicao.value,
    curso: curso.value,
    inicio: inicio.value,
    fim: fim.value ? fim.value : "Ainda cursando",
  };

  store.dispatch(setAcademicEducation(FormacaoAcademica))

  instituicao.value = "";
  curso.value = "";
  inicio.value = "";
  fim.value = "";

  mostrarInformacaoAcademica();
}
