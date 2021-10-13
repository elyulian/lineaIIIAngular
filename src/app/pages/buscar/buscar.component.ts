import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Departamento } from 'src/app/_model/Departamento';
import { DepartamentoService } from 'src/app/_service/departamento.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nombre', 'ver'];
  //se mapea el datasource
  dataSource = new MatTableDataSource<Departamento>();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private departamentoService: DepartamentoService) { 

  }

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
