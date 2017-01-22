import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';

const modalroutes: Routes = [
    { path: 'form', component: FormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(modalroutes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }