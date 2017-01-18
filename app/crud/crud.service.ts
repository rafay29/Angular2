import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';


@Injectable()
export class CRUDService {

    constructor(public http: Http) {
        console.log("CRUDService constructor.");
    }

    public GetAllUser(): Observable<User[]> {
        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .map((response: Response) => <User[]>response.json());
    }

    public GetUser(userId: number): Observable<User> {
        return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId)
            .map((response: Response) => <User>response.json());
    }
}
