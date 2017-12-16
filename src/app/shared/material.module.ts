import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatSnackBarModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatDialogModule, 
  MatButtonModule, 
  MatToolbarModule } from "@angular/material";

@NgModule({
  imports:[
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class MaterialModule {

}