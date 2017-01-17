import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
    moduleId: module.id,
    selector: 'todo-component',
    templateUrl: 'todo-list.component.html'
})
export class TodoComponent implements OnInit {
    public todolist: Todo[];

    constructor(private todoservice: TodoService) {
        console.log("TodoComponent constructor");
    }

     ngOnInit() { this.GetTodoList(); console.log("TodoComponent ngOnInit");}

    public GetTodoList() {
        this.todoservice.GetAll().subscribe(
            (data) => { this.todolist = data; console.log(data); },
            (error) => { console.log(error); })
    }


}