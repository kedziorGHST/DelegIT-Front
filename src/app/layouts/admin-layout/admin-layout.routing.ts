import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ClientsComponent } from '../../clients/clients.component';
import { CarsComponent } from 'app/cars/cars.component';
import { RidesComponent } from 'app/rides/rides.component';
import { SettlementComponent } from 'app/settlement/settlement.component';
import { ContractsComponent } from 'app/contracts/contracts.component';
import { VisitsComponent } from 'app/visits/visits.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'clients',        component: ClientsComponent },
    { path: 'cars',           component: CarsComponent },
    { path: 'rides',          component: RidesComponent },
    { path: 'settlement',     component: SettlementComponent },
    { path: 'contracts',      component: ContractsComponent },
    { path: 'visits',      component: VisitsComponent },
];
