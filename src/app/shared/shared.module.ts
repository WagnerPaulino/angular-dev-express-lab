import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxFormModule, DxCheckBoxModule, DxDataGridModule, DxButtonModule } from 'devextreme-angular';


const COMPONENT = [];
const DEVEXPRESS = [
  DxFormModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxButtonModule

];
const ANGULAR = [
  CommonModule
];

@NgModule({
  declarations: [
    COMPONENT
  ],
  imports: [
    DEVEXPRESS,
    ANGULAR
  ],
  exports: [
    COMPONENT,
    DEVEXPRESS,
    ANGULAR
  ]
})
export class SharedModule { }
