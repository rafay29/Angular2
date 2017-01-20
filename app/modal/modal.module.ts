import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalComponent } from './modal.component';
import { ModalRoutingModule } from './modal.route';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, FormsModule, NgbModule, ModalRoutingModule],
    declarations: [ModalComponent]
})
export class ModalModule {

}