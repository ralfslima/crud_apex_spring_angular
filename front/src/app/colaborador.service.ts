import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colaborador } from './colaborador/Colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private http:HttpClient) {}

  colaboradores : Colaborador[] = [];

  urlProjeto = 'http://localhost:8080/api';

  selecionarColaboradores(): Observable<Colaborador[]>{
    return this.http.get<Colaborador[]>(this.urlProjeto);
  }

  cadastrarColaborador(obj:Colaborador): Observable<Colaborador>{
    return this.http.post<Colaborador>(this.urlProjeto, obj);
  }

  alterarColaborador(obj:Colaborador): Observable<Colaborador>{
    return this.http.put<Colaborador>(this.urlProjeto, obj);
  }

  removerColaborador(codigo:number): Observable<null>{
    return this.http.delete<null>(this.urlProjeto+"/"+codigo);
  }
}
