import { Component } from '@angular/core';
import { PostagensService } from '../servicos/postagens.service';
import { Postagem } from '../modelos/Postagem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  // Vetor de postagens
  vetor:Postagem[] = [];
  
  // Construtor
  constructor(private servico:PostagensService){}

  // Variável número
  numero:number;

  // Executa alguma ação, após a criação do componente
  ngOnInit(){
    this.selecionar();
  }

  // Função para obter todas as postagens
  selecionar():void{
    this.servico.obterPostagens()
    .subscribe(obj => this.vetor = obj);
  }

  // Exibir o id a partir de um valor específico
  exibirId():void{
    if(this.numero == null){
      this.selecionar()
    }else{
      this.vetor = this.vetor.filter(obj => {return obj.id >= this.numero});
    }
  }

}
