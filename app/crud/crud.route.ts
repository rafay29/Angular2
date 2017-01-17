import { CrudComponent } from './crud.component';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';

const approutes = [
    { path: 'crud', component: CrudComponent },
    { path: 'crud/:id', component: UserDetailComponent }
];

export default RouterModule.forChild(approutes);