import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente06',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente06.component.html',
  styleUrl: './componente06.component.css'
})
export class Componente06Component {

  // Variável para exibir ou ocultar o texto
  texto:boolean = true;

  // Variável média
  media:number = 8;

}
