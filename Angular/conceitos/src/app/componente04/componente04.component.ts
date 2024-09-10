import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente04.component.html',
  styleUrl: './componente04.component.css'
})
export class Componente04Component {

  // Vetor
  nomes:string[] = ['Larissa', 'Amanda', 'Caio', 'Julio', 'Talita'];

}
