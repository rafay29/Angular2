import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post.model';

@Injectable()
export class PostService {
    constructor(private http: Http) {
    }

    public GetAllPost(): Observable<Post[]> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map((res: Response) => <Post[]>res.json());
    }
}
