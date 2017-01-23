import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'form-component',
    templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit {
    constructor(private titleService: Title){}

    ngOnInit(){
        this.titleService.setTitle("Form Home");
    }
}