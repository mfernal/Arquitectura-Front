import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ClientModel } from "@gonzalocarmenado/common-connector-clients";

@Injectable({
    providedIn: 'root',
})
export class ClientAddEditTransformationService {
    public generateClientDTOFromForm(clientForm: FormGroup, oldDto?: ClientModel): ClientModel {
        const formValue = clientForm.value;
        return {
            id: oldDto ? oldDto.id : '',
            createdAt: oldDto ? oldDto.createdAt : new Date().toISOString(),
            name: formValue.name,
            avatar: formValue.avatar,
            lastname: formValue.lastName,
            secondLastname: formValue.lastName2,
            phone: formValue.phone,
            email: formValue.email,
        };
    }
}