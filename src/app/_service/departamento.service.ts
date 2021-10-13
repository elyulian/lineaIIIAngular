import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Departamento } from '../_model/Departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService{
  private url: String = `${environment.HOST}/departamentos`;
  constructor(private http: HttpClient) { }

  public listar(){
    return this.http.get<Departamento[]>(`${this.url}/listar`);
  }
}
