import { Component, Input } from '@angular/core';
import { Post } from './post.model';

@Component({
    moduleId: module.id,
    selector: 'post-detail',
    templateUrl: './post-detail-modal.component.html'
})
export class PostDetailComponent {
    public postDetail: Post;
    closeResult: string;

    @Input("PostInput")
    public set post(value: Post) {
        this.postDetail = value;
    }

    constructor() {
        console.log("PostDetailComponent constructor.");
    }
}