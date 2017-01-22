import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
    moduleId: module.id,
    selector: 'form-component',
    templateUrl: 'form.component.html'
})
export class FormComponent {
    departments = ['IT', 'HR', 'Admin', 'Recuritment'];

    employee = new Employee(1, 'Rafay', 0.0, null, "7259554466");
    submitted = false;
    onSubmit() { this.submitted = true; }
    get diagnostic() { return JSON.stringify(this.employee); }

}