"use strict";
var todo_component_1 = require('./todo/todo.component');
var router_1 = require('@angular/router');
var bad_component_1 = require('./bad/bad.component');
var approutes = [
    { path: '', redirectTo: '/crud', pathMatch: 'full' },
    { path: 'todo', component: todo_component_1.TodoComponent },
    { path: '**', component: bad_component_1.BadRouteComponent }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forRoot(approutes);
//# sourceMappingURL=app.route.js.map