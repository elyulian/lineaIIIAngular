import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/_model/Vehiculo';
import { VehiculoService } from 'src/app/_service/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {

    let vehiculo: Vehiculo = new Vehiculo;
    
    vehiculo.placa="ash-753";
    vehiculo.modelo="2007";
    vehiculo.marca="renault";
    vehiculo.tipoVehiuclo="transporte";
    vehiculo.capacidad="carga";
    this.vehiculoService.guardar(vehiculo).subscribe(dara=>{

      console.log("se lleno correctamente");
    });
  }

}
