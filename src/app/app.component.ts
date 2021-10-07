import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  title = 'lineaIII';
  numero1: number=0;
  numero2: number=0;
  resultado: number=0;


  public operar(op : string ): void{

    console.log(op+" Esto arroja");
    switch(op){
      case 's':
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'r':
          this.resultado = this.numero1 - this.numero2;
        break;
      case 'm':
          this.resultado = this.numero1 * this.numero2;
        break;
      case 'd':
         this.resultado = this.numero1 / this.numero2;
        break;  
      default:
        this.resultado=0;
    }


    
  }


  public teclear(e:any): void{
    console.log("la tecla que se presiono es : "+e.key);
    console.log("la palabra del momento es = "+e.target.value);
    
    
  }


}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hidrogeno', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helio', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Litio', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Berylio', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boro', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbono', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogeno', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygeno', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluor', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
