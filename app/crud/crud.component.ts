import { Component, OnInit } from '@angular/core';
import { CRUDService } from './crud.service';
import { User } from './user.model';

@Component({
    moduleId: module.id,
    selector: 'crud-component',
    templateUrl: 'crud-list.component.html'
})
export class CrudComponent implements OnInit {
    private data: User[];

    constructor(private crudservice: CRUDService) {
        console.log("CrudComponent constructor.");
    }

    ngOnInit() { this.GetAll(); }

    public GetAll() {
        console.log("GetAll Working");
        this.crudservice.GetAllUser().subscribe(
            (data) => { this.data = data; console.log(data) },
            (error) => { console.log(error) });
    }
}

