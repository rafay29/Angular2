"use strict";
var crud_component_1 = require('./crud.component');
var router_1 = require('@angular/router');
var user_detail_component_1 = require('./user-detail.component');
var approutes = [
    { path: 'crud', component: crud_component_1.CrudComponent },
    { path: 'crud/:id', component: user_detail_component_1.UserDetailComponent }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(approutes);
//# sourceMappingURL=crud.route.js.map