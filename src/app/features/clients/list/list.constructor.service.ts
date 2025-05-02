import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ClientListConstructorService {
    public initTableData(): string[] {
        return ['id',
            'avatar',
            'name',
            'lastname',
            'secondLastname',
            'phone',
            'email',
            'createdAt',
            'actionButtons'
        ];
    }

}