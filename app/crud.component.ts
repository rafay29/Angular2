import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { CRUDService } from './crud.service';

@Component({
    moduleId: module.id,
    selector: 'crud-component',
    templateUrl: 'discomponent.html'
})
export class CrudComponent implements OnInit {
    private data: any;

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

export class User {
    public id: string;
    public name: string;
    public username: string;
    public email: string;
}