import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root',
})
export class ClientAddEditConstructorService {
    
    constructor(private fb: FormBuilder) { }

    public initFormData(): FormGroup {
        return this.fb.group({
            name: [''],
            lastName: [''],
            lastName2: [''],
            phone: [''],
            email: [''],
        });
    }
}