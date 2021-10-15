import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ciudad } from '../_model/Ciudad';
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

  public listarCiudadPorDepartamento(idDepartamento: number){
    return this.http.get<Ciudad[]>(`${this.url}/ciudad/listarPorDepartamnto/${idDepartamento}`);
  }
}
