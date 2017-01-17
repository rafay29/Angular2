import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';
import { BadRouteComponent } from './bad/bad.component';

const approutes = [
    { path: '', redirectTo: '/crud', pathMatch: 'full' },
    { path: 'todo', component: TodoComponent },
    { path: '**', component: BadRouteComponent }
];

export default RouterModule.forRoot(approutes);