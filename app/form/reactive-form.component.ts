import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Title } from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'reactive-form-component',
    templateUrl: 'reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
    departments = ['IT', 'HR', 'Admin', 'Recuritment'];

    constructor(private formBuilder: FormBuilder, private titleService: Title) { }

    employee = new Employee(1, 'Rafay', 0.0, null, "7259554466");

    registerForm: FormGroup;
    ngOnInit() {
        this.titleService.setTitle("Reactive Form");
        this.registerForm = this.formBuilder.group({
            name: [this.employee.name, Validators.required],
            salary: this.employee.salary,
            department: "",
            contact: this.employee.contactNumber
        });
    }


}