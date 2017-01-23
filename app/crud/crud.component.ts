import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from './crud.service';
import { User } from './user.model';
import { Title } from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'crud-component',
    templateUrl: 'crud-list.component.html'
})
export class CrudComponent implements OnInit {
    private data: User[];

    constructor(private router: Router, private crudservice: CRUDService, private titleService: Title) {
        console.log("CrudComponent constructor.");
    }

    ngOnInit() {
        this.GetAll();
        this.titleService.setTitle("CRUD Home");
    }

    public GetAll() {
        console.log("GetAll Working");
        this.crudservice.GetAllUser().subscribe(
            (data) => { this.data = data; console.log(data) },
            (error) => { console.log(error) });
    }

    public OnSelect(user: User) {
        console.log(user);
        this.router.navigate(['/crud', user.id]);
    }
}

