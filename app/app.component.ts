import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>

    <!-- Router Link -->
    <a routerLink="/xyz">Bad Route</a>
    <a routerLink="/crud">CRUD Component</a>
    <a routerLink="/todo">Todo List Component</a>
    <a routerLink="/post">Posts</a>
    <a routerLink="/modal">Modal BootStrap</a>
    <!-- Router Link -->

    <!-- Router Outlet -->
    <router-outlet></router-outlet>
    <!-- Router Outlet -->
  `,
})
export class AppComponent { name = 'Angular'; }
