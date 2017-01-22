import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { FormRoutingModule } from './form.route';


@NgModule({
    imports: [BrowserModule,FormsModule, FormRoutingModule],
    declarations: [FormComponent]
})
export class FormModule {

}