import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatSnackBarModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatDialogModule, 
  MatButtonModule, 
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatCardModule } from "@angular/material";

@NgModule({
  imports:[
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ]
})
export class MaterialModule {

}