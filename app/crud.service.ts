import { Injectable }     from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CRUDService {

    constructor(public http: Http) {
        console.log("CRUDService constructor.");
    }

    public GetAllUser():Observable<JSON>{
     return this.http.get('https://jsonplaceholder.typicode.com/users')
                     .map((response:Response) => response.json());
    }
}
