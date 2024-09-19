import { Component } from '@angular/core';
import { PostagensService } from '../servicos/postagens.service';
import { Postagem } from '../modelos/Postagem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  // Vetor de postagens
  vetor:Postagem[] = [];

  // Status de carregamento
  carregando:boolean = true;
  
  // Construtor
  constructor(private servico:PostagensService){}

  // Executa alguma ação, após a criação do componente
  ngOnInit(){
    this.selecionar();
  }

  // Função para obter todas as postagens
  selecionar():void{
    this.servico.obterPostagens()
    .subscribe(obj => {
      this.vetor = obj;
      this.carregando = false;
    });
  }


}
