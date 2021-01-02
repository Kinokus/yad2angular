import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCentralComponent } from './table-central.component';
import {TooltipModule} from 'ng2-tooltip-directive';



@NgModule({
  declarations: [TableCentralComponent],
  exports: [
    TableCentralComponent
  ],
    imports: [
        CommonModule,
        TooltipModule
    ]
})
export class TableCentralModule { }
