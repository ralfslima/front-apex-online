import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {

  // Variável contendo uma url
  url:string = 'http://www.google.com';

  // Função para exibir uma mensagem
  mensagem():void{
    alert('Hello Componente01');
  }

}
