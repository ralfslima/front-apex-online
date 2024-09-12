import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente10',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente10.component.html',
  styleUrl: './componente10.component.css'
})
export class Componente10Component {

  // Objeto de formulário
  pessoa = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)])
  });

}
