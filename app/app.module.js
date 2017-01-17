"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//=============== Modules ===============//
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
//=============== Modules ===============//
//=============== Custom Modules ===============//
var crud_module_1 = require('./crud/crud.module');
//=============== Custom Modules ===============//
//=============== Component ===============//
var app_component_1 = require('./app.component');
// import { CrudComponent } from './crud.component';
var todo_component_1 = require('./todo/todo.component');
var bad_component_1 = require('./bad/bad.component');
//=============== Component ===============//
//=============== Service ===============//
// import { CRUDService } from './crud.service';
var todo_service_1 = require('./todo/todo.service');
//=============== Service ===============//
var app_route_1 = require('./app.route');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, app_route_1.default, crud_module_1.CrudModule],
            declarations: [app_component_1.AppComponent, todo_component_1.TodoComponent, bad_component_1.BadRouteComponent],
            providers: [todo_service_1.TodoService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map