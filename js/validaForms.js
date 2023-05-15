import { mudarFormAtivo } from "./forms.js";
import {
  nextStep,
  setAddress,
  setEmail,
  setFunction,
  setName,
  setPhone,
  setProfessionalPerfil,
} from "./redux/reducers.js";
import store from "./redux/store.js";

export function validaForms(form) {
  const formData = new FormData(form);

  const step = store.getState().step;

  switch (step) {
    case 0:
      const nome = formData.get("nome_completo");
      const endereco = formData.get("endereco_completo");
      const telefone = formData.get("telefone");
      const email = formData.get("email");

      store.dispatch(setEmail(email));
      store.dispatch(setName(nome));
      store.dispatch(setAddress(endereco));
      store.dispatch(setPhone(telefone));
      store.dispatch(nextStep());
      break;
    case 1:
      const perfil = formData.get("perfil_profissional");
      const funcao = formData.get("funcao");

      console.log(perfil, funcao);

      store.dispatch(setProfessionalPerfil(perfil));
      store.dispatch(setFunction(funcao));
      store.dispatch(nextStep());
      break;
    case 2:
      store.dispatch(nextStep());
      break;
    case 3:
      store.dispatch(nextStep());
      break;
    case 4:
      const data = JSON.stringify(store.getState());
      console.log(data);
      localStorage.setItem("curriculo", data);
      setTimeout(() => {
        window.location.href = "/curriculo.html";
      }, 200);
      break;
    default:
      break;
  }

  mudarFormAtivo();
}
