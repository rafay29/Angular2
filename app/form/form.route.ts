import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { TemplateFormComponent } from './template-form.component';
import { ReactiveFormComponent } from './reactive-form.component';

const modalroutes: Routes = [
    {
        path: 'form', component: FormComponent,
        children: [
            { path: 'templateform', component: TemplateFormComponent },
            { path: 'reactiveform', component: ReactiveFormComponent }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(modalroutes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }