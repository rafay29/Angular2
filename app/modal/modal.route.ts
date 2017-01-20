import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';

const modalroutes: Routes = [
    { path: 'modal', component: ModalComponent }
];

@NgModule({
    imports: [RouterModule.forChild(modalroutes)],
    exports: [RouterModule]
})
export class ModalRoutingModule { }