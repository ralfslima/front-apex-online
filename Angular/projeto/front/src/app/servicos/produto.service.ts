import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../modelos/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // URL da API
  private url:string = 'http://localhost:8080/produto';

  // Construtor
  constructor(private http:HttpClient) { }

  // Método de cadastro
  servicoCadastro(p:Produto):Observable<Produto>{
    return this.http.post<Produto>(this.url, p);
  }

  // Método para listar
  servicoListar():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }

  // Método para remover
  servicoRemocao(codigo:number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${codigo}`);
  }

}
