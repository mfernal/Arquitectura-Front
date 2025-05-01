import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { ClientRoutingModule } from './clients.routing.module';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    ListComponent,
    ClientsComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterModule,
    MatTableModule
  ],
})
export class ClientsModule { }
