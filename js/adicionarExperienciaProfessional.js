import { setProfessionalExperience } from "./redux/reducers.js";
import { mostrarInformacaoExperienciaProfissional } from "./mostrarInformacaoExperienciaProfissional.js";
import store from "./redux/store.js";

export function addProfessionalExperience() {
  const nomeEmpresa = document.querySelector("#nome_empresa");
  const cargo = document.querySelector("#cargo");
  const responsabilidadesAtribuicoes = document.querySelector(
    "#responsabilidades_atribuicoes"
  );
  const inicio = document.querySelector("#inicio_experiencia");
  const fim = document.querySelector("#fim_experiencia");

  const ExperienciaProfissional = {
    nomeEmpresa: nomeEmpresa.value,
    cargo: cargo.value,
    responsabilidadesAtribuicoes: responsabilidadesAtribuicoes.value,
    inicio: inicio.value,
    fim: fim.value ? fim.value : "Atualmente",
  };

  store.dispatch(setProfessionalExperience(ExperienciaProfissional));

  nomeEmpresa.value = "";
  cargo.value = "";
  responsabilidadesAtribuicoes.value = "";
  inicio.value = "";
  fim.value = "";

  mostrarInformacaoExperienciaProfissional();
}
