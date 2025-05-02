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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditComponent } from './add-edit/add-edit.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    ListComponent,
    AddEditComponent,
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
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule 
  ],
})
export class ClientsModule { }
