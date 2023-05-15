
const data = JSON.parse(localStorage.getItem("curriculo"));

const curriculoContainer = document.querySelector(".curriculo-container");

const title = document.createElement("h1");

title.innerText = data.name;

title.classList.add("nome_completo");

curriculoContainer.appendChild(title);

const wishedFunction = document.createElement("p");

wishedFunction.innerHTML = data.function;

wishedFunction.classList.add("cargo_desejado");

curriculoContainer.appendChild(wishedFunction);

const address = document.createElement("p");

address.classList.add("address");
address.innerText = data.address;

curriculoContainer.appendChild(address);

const email = document.createElement("p");

email.classList.add("email");
email.innerText = data.email;

curriculoContainer.appendChild(email);

const professionalPerfil = document.createElement("p");

professionalPerfil.classList.add("perfil_profissional");
professionalPerfil.innerText = data.professionalPerfil;

curriculoContainer.appendChild(professionalPerfil);

const experiencesSubTitle = document.createElement("h2");
experiencesSubTitle.innerText = "Experiencias";

curriculoContainer.appendChild(experiencesSubTitle);

data.experience.forEach((exp) => {
  const experiencia_responsabilidades = document.createElement("p");
  experiencia_responsabilidades.classList.add("experiencia_responsabilidades");
  experiencia_responsabilidades.innerText = exp.responsabilidadesAtribuicoes;

  const experiencia_empresa = document.createElement("p");
  experiencia_empresa.classList.add("experiencia_empresa");
  experiencia_empresa.innerText = exp.nomeEmpresa;

  const experiencia_cargo = document.createElement("p");
  experiencia_cargo.classList.add("experiencia_cargo");
  experiencia_cargo.innerText = exp.cargo;

  const experiencia_detalhes = document.createElement("div");
  experiencia_detalhes.classList.add("experiencia_detalhes");
  experiencia_detalhes.appendChild(experiencia_cargo);
  experiencia_detalhes.appendChild(experiencia_empresa);
  experiencia_detalhes.appendChild(experiencia_responsabilidades);

  const experiencia_data = document.createElement("p");
  experiencia_data.classList.add("experiencia_data");
  experiencia_data.innerText = `${exp.inicio.split("-")[0]} - ${
    exp.fim.split("-")[0]
  }`;

  const experiencia_container = document.createElement("div");
  experiencia_container.classList.add("experiencia_container");
  experiencia_container.appendChild(experiencia_data);
  experiencia_container.appendChild(experiencia_detalhes);

  curriculoContainer.appendChild(experiencia_container);
});

const educationSubTitle = document.createElement("h2");
educationSubTitle.innerText = "Educação";

curriculoContainer.appendChild(educationSubTitle);

data.education.forEach((edu) => {
  const formacao_instituicao = document.createElement("p");
  formacao_instituicao.classList.add("formacao_instituicao");
  formacao_instituicao.innerText = edu.instituicao;

  const formacao_curso = document.createElement("p");
  formacao_curso.classList.add("formacao_curso");
  formacao_curso.innerText = edu.curso;

  const formacao_detalhes = document.createElement("div");
  formacao_detalhes.classList.add("formacao_detalhes");
  formacao_detalhes.appendChild(formacao_curso);
  formacao_detalhes.appendChild(formacao_instituicao);

  const formacao_data = document.createElement("p");
  formacao_data.innerText = `${edu.inicio.split("-")[0]} - ${
    edu.fim.split("-")[0]
  }`;
  formacao_data.classList.add("formacao_data");

  const formacao_container = document.createElement("div");
  formacao_container.classList.add("formacao_container");
  formacao_container.appendChild(formacao_data);
  formacao_container.appendChild(formacao_detalhes);

  curriculoContainer.appendChild(formacao_container);
});

const skillsSubTitle = document.createElement("h2");
skillsSubTitle.innerText = "Habilidades";

curriculoContainer.appendChild(skillsSubTitle);

const habilidadesLista = document.createElement("li");
habilidadesLista.classList.add("lista-habilidades");

data.skills.forEach((skill) => {
  const habilidade = document.createElement("ul");
  skill;
  habilidade.innerText = skill;

  habilidadesLista.appendChild(habilidade);
});

curriculoContainer.appendChild(habilidadesLista);
