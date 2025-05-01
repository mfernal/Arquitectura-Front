import { Component } from '@angular/core';
import { ClientListConstructorService } from './list.constructor.service';
import { ClientListAccessService } from './list.access.service';
import { ClientModel } from '@gonzalocarmenado/common-connector-clients';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  standalone: false
})
export class ListComponent {

  public tableClientsData!: ClientModel[];
  public tableClientsColumnsHeaders!: string[];

  constructor(
    private readonly constructorService: ClientListConstructorService,
    private readonly accessService: ClientListAccessService,
  ) {
    this.initTableData();
  }

  public async initTableData():Promise<void>{
    this.tableClientsColumnsHeaders = this.constructorService.initTableData();
    this.tableClientsData = await this.getClientList();
  }


  //#region Acceso a datos
  public async getClientList(): Promise<ClientModel[]> {
    return this.accessService.getClientList();
  }
  //#endregion Acceso a datos
}
