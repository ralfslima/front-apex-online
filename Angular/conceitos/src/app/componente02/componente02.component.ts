import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente02',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.css'
})
export class Componente02Component {

  // Variável de visibilidade
  visivel:boolean = true;

  // Função para intercarlar a visibilidade
  alterarVisibilidade():void{
    this.visivel = !this.visivel;
  }

}
