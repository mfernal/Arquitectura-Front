import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientsModule } from './features/clients/clients.module';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: '',
                redirectTo: 'clients',
                pathMatch: 'full'
            },
            {
                path: 'clients',
                loadChildren: () => ClientsModule,
            },
        ]
    }
];
