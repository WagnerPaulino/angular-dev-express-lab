import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxFormModule, DxCheckBoxModule, DxDataGridModule, DxButtonModule, DxSelectBoxModule, DxNumberBoxModule } from 'devextreme-angular';


const COMPONENT = [];
const DEVEXPRESS = [
  DxFormModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxButtonModule,
  DxSelectBoxModule,
  DxNumberBoxModule,

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
