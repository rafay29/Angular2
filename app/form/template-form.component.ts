import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { Title } from '@angular/platform-browser';
@Component({
    moduleId: module.id,
    selector: 'template-form-component',
    templateUrl: 'template-form.component.html'
})
export class TemplateFormComponent implements OnInit {
    departments = ['IT', 'HR', 'Admin', 'Recuritment'];

    constructor(private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle("Template Form");
    }

    employee = new Employee(1, 'Rafay', 0.0, null, "7259554466");
    submitted = false;
    onSubmit() { this.submitted = true; }
    get diagnostic() { return JSON.stringify(this.employee); }

}