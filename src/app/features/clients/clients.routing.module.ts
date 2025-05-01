import { RouterModule, Routes } from "@angular/router";
import { ClientsComponent } from "./clients.component";
import { ListComponent } from "./list/list.component";
import { AddEditComponent } from "./add-edit/add-edit.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: ClientsComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: ListComponent,
                pathMatch: 'full',
            },
            {
                path: 'add-edit',
                component: AddEditComponent,
                pathMatch: 'full',
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientRoutingModule { }
