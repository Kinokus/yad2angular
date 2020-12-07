import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCentralComponent } from './table-central.component';



@NgModule({
  declarations: [TableCentralComponent],
  exports: [
    TableCentralComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TableCentralModule { }
