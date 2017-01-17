import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrudComponent } from './crud.component';
import { CRUDService } from './crud.service';

import { UserDetailComponent } from './user-detail.component';

import route from './crud.route';

@NgModule({
    imports: [CommonModule, FormsModule, route],
    declarations: [CrudComponent, UserDetailComponent],
    providers: [CRUDService]
})
export class CrudModule {

}