import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/_service/departamento.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private departamentoService: DepartamentoService) { 

  }

  ngOnInit(): void {
    console.log("se ejecuto correctamente");
    this.departamentoService.listar().subscribe(data =>{
    console.log(data);
    data.forEach(element => {
      console.log(`Codigo: ${element.idDepartamento} - Nombre ${element.nombre}`);
    });
    });
    console.log("Despues del servicio");
    
  }

}
