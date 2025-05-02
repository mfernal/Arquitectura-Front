import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ClientModel } from "@gonzalocarmenado/common-connector-clients";

@Injectable({
    providedIn: 'root',
})
export class ClientAddEditConstructorService {

    constructor(private fb: FormBuilder) { }

    public initFormData(clientData?: ClientModel): FormGroup {
        return this.fb.group({
            name: [clientData?.name || ''],
            lastName: [clientData?.lastname || ''],
            lastName2: [clientData?.secondLastname || ''],
            phone: [clientData?.phone || ''],
            email: [clientData?.email || ''],
        });
    }
}