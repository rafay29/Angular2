import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ToasterModule, ToasterService} from 'angular2-toaster';

import { ToastComponent } from './toast.component';
import { ToastRoutingModule } from './toast.route';


@NgModule({
    imports: [CommonModule, FormsModule, ToastRoutingModule,ToasterModule],
    declarations: [ToastComponent]
})
export class ToastModule {

}