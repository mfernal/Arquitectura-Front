import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ClientListConstructorService {
    public initTableData(): string[] {
        return ['id',
            'createdAt',
            'name',
            'avatar',
            'lastname',
            'secondLastname',
            'phone',
            'email',
            'actionButtons'
        ];
    }

}