import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../modelos/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  // Construtor para inicializar um objeto http
  constructor(private http:HttpClient) { }

  // Método para retornar postagens
  obterPostagens():Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
