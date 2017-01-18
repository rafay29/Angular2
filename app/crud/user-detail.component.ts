import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { User } from './user.model';
import { CRUDService } from './crud.service';

@Component({
    moduleId: module.id,
    selector: 'user-detail',
    templateUrl: 'user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
    public user: User;

    constructor(private route: ActivatedRoute, private router: Router, private crudservice: CRUDService) {
        console.log("UserDetailComponent constructor.");
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.crudservice.GetUser(params['id']))
            .subscribe((user: User) => this.user = user);

        console.log(this.user);
    }
}