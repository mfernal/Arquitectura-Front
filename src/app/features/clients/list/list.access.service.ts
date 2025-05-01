import { Injectable } from "@angular/core";
import { ClientModel, CommonConnectorClientsService } from "@gonzalocarmenado/common-connector-clients";
import { StandarResponse } from "@gonzalocarmenado/general-http-core-hub";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ClientListAccessService {
    constructor(
        private readonly clientService: CommonConnectorClientsService
    ) {
    }

    public getClientList(): Promise<ClientModel[]> {
        return new Promise((resolve, reject) => {
            this.clientService.getClientList(environment.testAPI)
              .then((clientList: StandarResponse<ClientModel[]>) => {
                resolve(clientList.data);
              })
              .catch((message: any) => {
                reject(message instanceof Error ? message : new Error(message));
              });
          });
    }
}