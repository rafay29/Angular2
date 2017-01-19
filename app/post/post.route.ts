import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';

const postroutes: Routes = [
    { path: 'post', component: PostComponent }
];

@NgModule({
    imports: [RouterModule.forChild(postroutes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }