import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableCentralModule} from './table-central/table-central.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TableCentralModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
