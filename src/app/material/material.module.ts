import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatTableModule,
  ], exports:[
    CommonModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatTableModule,
  ]
})
export class MaterialModule { }
