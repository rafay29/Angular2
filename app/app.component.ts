import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Angular 2</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" routerLink="/xyz">Bad Route</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/crud">CRUD Component</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/todo">Todo List Component</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/post">Posts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/modal">Modal BootStrap</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/toast">Toast</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/form">Form</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router Outlet -->
    <div class="container">
    <router-outlet></router-outlet>
    </div>
    <!-- Router Outlet -->
  `,
})
export class AppComponent { name = 'Angular'; }
