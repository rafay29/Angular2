//=============== Modules ===============//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//=============== Modules ===============//

//=============== Custom Modules ===============//
import { CrudModule } from './crud/crud.module';
import { PostModule } from './post/post.module';
import { ModalModule } from './modal/modal.module';
import { ToastModule } from './toast/toast.module';
//=============== Custom Modules ===============//

//=============== Component ===============//
import { AppComponent } from './app.component';
// import { CrudComponent } from './crud.component';
import { TodoComponent } from './todo/todo.component';
import { BadRouteComponent } from './bad/bad.component';
//=============== Component ===============//

//=============== Service ===============//
// import { CRUDService } from './crud.service';
import { TodoService } from './todo/todo.service';
//=============== Service ===============//

import routes from './app.route';

@NgModule({
  imports: [BrowserModule, HttpModule, JsonpModule, FormsModule, NgbModule.forRoot(), routes, CrudModule, PostModule, ModalModule,ToastModule],
  declarations: [AppComponent, TodoComponent, BadRouteComponent],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
