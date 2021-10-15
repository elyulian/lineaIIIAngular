
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Departamento } from 'src/app/_model/Departamento';
import { DepartamentoService } from 'src/app/_service/departamento.service';
import {map} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {



  displayedColumns: string[] = ['codigo', 'nombre', 'ver'];

  //se mapea el datasource
  dataSource = new MatTableDataSource<Departamento>();

  @ViewChild("DepartamentoPaginator") paginator!: MatPaginator;


  constructor(private departamentoService: DepartamentoService,  public route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("se ejecuto correctamente");
    this.departamentoService.listar().subscribe(data =>{
    /*console.log(data);
    data.forEach(element => {
      console.log(`Codigo: ${element.idDepartamento} - Nombre ${element.nombre}`);*/
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    console.log("Despues del servicio");
    
  }


  }


