import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { ClientRoutingModule } from './clients.routing.module';
import { MatTableModule } from '@angular/material/table';
import { FormatDatePipe } from '../../shared/pipes/date-transform.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    ListComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterModule,
    MatTableModule,
    FormatDatePipe,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
})
export class ClientsModule { }
