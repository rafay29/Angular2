import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CrudComponent } from './crud.component';

import { CRUDService } from './crud.service';

@NgModule({
  imports: [BrowserModule, HttpModule, JsonpModule],
  declarations: [AppComponent, CrudComponent],
  providers: [CRUDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
