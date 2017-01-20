import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToastComponent } from './toast.component';

const modalroutes: Routes = [
    { path: 'toast', component: ToastComponent }
];

@NgModule({
    imports: [RouterModule.forChild(modalroutes)],
    exports: [RouterModule]
})
export class ToastRoutingModule { }