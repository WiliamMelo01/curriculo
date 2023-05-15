import { addAcademicEducation } from "./adicionarFormacaoAcademica.js";
import { addProfessionalExperience } from "./adicionarExperienciaProfessional.js";
import { addSkill } from "./adicionarHabilidade.js";
import { validaForms } from "./validaForms.js";
import store from "./redux/store.js";
import { prevStep } from "./redux/reducers.js";

const prevButtons = document.querySelectorAll(".prev-button");

export function mudarFormAtivo() {
  const allForms = document.querySelectorAll("form");
  const steps = document.querySelectorAll(".step");
  const addAcademicEducationButton =
    document.querySelector(".adicinar-formacao");
  const addProfissionalExperience = document.querySelector(
    ".adicinar-experiencia-profissional"
  );
  const addSkillButton = document.querySelector(".adicionar-habilidade");
  const active = store.getState().step;
  // const active = 4;

  const currentForm = allForms[active];

  
  // prevButtons[active].addEventListener("click", () => {
  //   store.dispatch(prevStep());
  //   mudarFormAtivo();
  // });

  prevButtons[active].style.display = active > 0 ? "block" : "none";

  allForms.forEach((form) => {
    form.style.display = "none";
  });

  steps.forEach((step) => {
    step.classList.remove("active");
  });

  currentForm.style.display = "flex";
  steps[active].classList.add("active");

  currentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    validaForms(event.target);
  });

  addAcademicEducationButton?.addEventListener("click", addAcademicEducation);
  addProfissionalExperience?.addEventListener(
    "click",
    addProfessionalExperience
  );
  addSkillButton?.addEventListener("click", addSkill);
}

mudarFormAtivo();
