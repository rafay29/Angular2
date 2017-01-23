import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { TemplateFormComponent } from './template-form.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { FormRoutingModule } from './form.route';


@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, FormRoutingModule],
    declarations: [FormComponent, TemplateFormComponent, ReactiveFormComponent]
})
export class FormModule {

}