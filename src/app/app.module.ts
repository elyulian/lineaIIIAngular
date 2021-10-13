import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BuscarComponent,
    EditarComponent,
    IngresarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
