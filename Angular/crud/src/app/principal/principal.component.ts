import { Component } from '@angular/core';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  // Índice da pessoa selecionada
  indice:number = -1;

  // Variável para exibir ou ocultar o botão de cadastro
  btnCadastrar:boolean = true;

  // Vetor de pessoas
  vetor:Pessoa[] = [];

  // Formulário Reativo
  formulario = new FormGroup({
    nome:   new FormControl(''),
    idade:  new FormControl(null),
    cidade: new FormControl(''),
  });

  // Função para cadastrar
  cadastrar():void{
    this.vetor.push(this.formulario.value as Pessoa);

    this.formulario.reset();

    alert("Cadastro efetuado com sucesso!");
  }

  // Função para selecionar pessoas
  selecionar(indice:number):void{
    this.btnCadastrar = false;

    this.indice = indice;

    this.formulario.setValue({
      nome:   this.vetor[indice].nome,   
      idade:  this.vetor[indice].idade,  
      cidade: this.vetor[indice].cidade
    });
  }

  // Função para cancelar ações
  cancelar():void{
    this.formulario.reset();

    this.btnCadastrar = true;
  }

  // Função para remover pessoas
  remover():void{
    this.vetor.splice(this.indice, 1);

    this.cancelar();
  }

  // Função para alterar pessoas
  alterar():void{

    // Verificar se o nome que será alterado já existe
    let existeNome = this.vetor.findIndex((obj, i) => {
      return obj.nome == this.formulario.value.nome && i != this.indice
    });
    
    // Condicional
    if(existeNome == -1){
      this.vetor[this.indice] = this.formulario.value;

      this.cancelar();
    }else{
      alert("O nome informado já existe");
    }

  }

}
