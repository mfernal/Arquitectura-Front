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

    public validateClientForm(clientForm: FormGroup): string | null {
        const controls = clientForm.controls;

        if (controls['name'].invalid) {
            return 'El nombre es obligatorio.';
        }

        if (controls['phone'].invalid) {
            if (controls['phone'].errors?.['required']) {
                return 'El teléfono es obligatorio.';
            }
            if (controls['phone'].errors?.['pattern']) {
                return 'El formato del teléfono no es válido.';
            }
        }

        if (controls['email'].invalid) {
            if (controls['email'].errors?.['required']) {
                return 'El email es obligatorio.';
            }
            if (controls['email'].errors?.['email']) {
                return 'El formato del email no es válido.';
            }
        }

        return null
    }

}