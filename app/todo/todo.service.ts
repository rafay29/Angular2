import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Todo } from './todo.model';

@Injectable()
export class TodoService {

    constructor(private _http: Http) {
        console.log('TodoService constructor.');
    }

    public GetAll(): Observable<Todo[]> {
        return this._http.get('https://jsonplaceholder.typicode.com/todos')
            .map((res: Response) => res.json());
    }
}