import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';

@Component({
    moduleId: module.id,
    selector: 'post-component',
    templateUrl: 'post.component.html'
})
export class PostComponent implements OnInit {
    private posts: Post[] = [];
    private selectedpost:Post;

    constructor(private postservice: PostService) {

    }

    ngOnInit() {
        this.GetAllPost();
    }

    public GetAllPost() {
        this.postservice.GetAllPost().subscribe(
            ((posts) => this.posts = posts),
            ((error) => console.log(error))
        );
    }

    public GetSelectedPost(_post:Post){
        this.selectedpost = _post;
    }
}