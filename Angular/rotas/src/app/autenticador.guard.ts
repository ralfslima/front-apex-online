import { CanActivateFn, Router } from '@angular/router';

export const autenticadorGuard: CanActivateFn = (route, state) => {
  
  // Objeto Router (redirecionamento)
  const rota = new Router;

  // Variável de nome
  //let nome = "Ana";

  // Condicional
  if(localStorage.getItem("nome") === "Ralf"){
    return true;
  }else{
    rota.navigateByUrl('/inicio');
    return false;
  }

};
