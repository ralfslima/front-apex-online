import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../servicos/produto.service';
import { Produto } from '../modelos/Produto';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  // Cabeçalho da tabela
  cabecalho: string[] = ['codigo', 'nome', 'valor', 'remover'];

  // DataSource
  dataSource = new MatTableDataSource<Produto>();

  // Formulário reativo
  formulario = new FormGroup({
    nome: new FormControl(''),
    valor: new FormControl('')
  });

  // Vetor de produtos
  vetor:Produto[] = [];

  // Método construtor
  constructor(private servico:ProdutoService){}

  // Ciclo de vida ngOnInit (Executa após o componente ser totalmente carregado)
  ngOnInit(){
    this.servico.servicoListar()
    .subscribe(retorno => {
      this.vetor = retorno
      this.dataSource.data = this.vetor;
    });
  }

  // Método de cadastro
  cadastrar():void{
    this.servico.servicoCadastro(this.formulario.value as Produto)
    .subscribe(retorno => {
      // Atualizar o vetor
      this.vetor.push(retorno)

      // Atualizar o DataSource
      this.dataSource.data = this.vetor;
    });
  }

  // Método de remoção
  remover(codigo:number):void{
    this.servico.servicoRemocao(codigo)
    .subscribe(() => {
      // Posicação do código no vetor
      let posicaoProduto = this.vetor.findIndex(p => {return p.codigo == codigo});

      // Remover produto do vetor
      this.vetor.splice(posicaoProduto, 1);

      // Atualizar datasource
      this.dataSource.data = this.vetor;
    });
  }

}
