import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';

const routes: Routes = [
{path: 'buscar',component: BuscarComponent},
{path: 'ingresar', component: IngresarComponent},
{path: 'editar',component :EditarComponent},
{path: '**',component :BuscarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
