
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Ciudad } from 'src/app/_model/Ciudad';
import { Departamento } from 'src/app/_model/Departamento';
import { DepartamentoService } from 'src/app/_service/departamento.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {



  displayedColumns: string[] = ['codigo', 'nombre', 'ver'];
  displayedColumnsCiudad: string[] = ['codigo', 'nombre'];
  //se mapea el datasource
  dataSource = new MatTableDataSource<Departamento>();
  dataSourceCiudad = new MatTableDataSource<Ciudad>();
  flagCiudad= this.dataSourceCiudad.data.length > 0 ? true: false;

  noData = this.dataSourceCiudad.connect().pipe(map(data => data.length === 0));

  @ViewChild("DepartamentoPaginator") paginator!: MatPaginator;
  @ViewChild("paginatorCiudad") paginatorCiudad!: MatPaginator;

  constructor(private departamentoService: DepartamentoService) { }

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

 cargarCiudadPorDepartamento(idDepartamento: number):void{
    console.log("Ejecutando");
    this.departamentoService.listarCiudadPorDepartamento(idDepartamento).subscribe(data =>{
      console.log(data);
      this.dataSourceCiudad = new MatTableDataSource(data);
      this.dataSourceCiudad.paginator = this.paginatorCiudad;
      this.flagCiudad= this.dataSourceCiudad.data.length > 0 ? true: false;
    });    
  }

  cambiarEstadoFlag():void{
    this.flagCiudad = !this.flagCiudad;
  }
  }


