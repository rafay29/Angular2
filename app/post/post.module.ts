import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post.route';
import { PostService } from './post.service';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [PostRoutingModule, CommonModule, FormsModule],
    declarations: [PostComponent, PostDetailComponent],
    providers: [PostService]
})
export class PostModule {

}