import { Component, OnInit } from '@angular/core';
import { ToasterService, Toast, ToasterConfig } from 'angular2-toaster';

@Component({
    moduleId: module.id,
    selector: 'toast-component',
    templateUrl: 'toast.component.html'
})
export class ToastComponent implements OnInit {


    public toasterconfig: ToasterConfig =
    new ToasterConfig({ positionClass: 'toast-top-right' });

    constructor(private toasterService: ToasterService) {
    }

    popToast(type: string) {
        // this.toasterService.pop('success', 'Success Notification', 'Data is stored successfully.');
        var toast: Toast = {
            type: type.toLowerCase(),
            title: 'Success Notification',
            body: 'Data is stored successfully.',
            showCloseButton: true,
        };
        this.toasterService.pop(toast);
    }
    ngOnInit() {

    }
}