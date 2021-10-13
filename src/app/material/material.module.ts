import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule

  ], exports:[
    CommonModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule

  ]
})
export class MaterialModule { }
