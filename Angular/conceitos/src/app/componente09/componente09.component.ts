import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente09',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente09.component.html',
  styleUrl: './componente09.component.css'
})
export class Componente09Component {

  // Variável para armazenar um nome
  nome:string = '';

  // Variáveis para armazenar uma cidade e estado
  cidade:string = '';
  estado:string = '';

}
