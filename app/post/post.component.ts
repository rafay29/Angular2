import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';

@Component({
    moduleId: module.id,
    selector: 'post-component',
    templateUrl: 'post.component.html'
})
export class PostComponent implements OnInit {
    public bgColor: string;
    private posts: Post[] = [];
    private selectedpost: Post;

    constructor(private postservice: PostService) {
        this.bgColor = "yellow";
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

    public GetSelectedPost(_post: Post) {
        this.selectedpost = _post;
    }

    public OnColorChange(color: any) {
        console.log(color);
        this.bgColor = color;
    }
}