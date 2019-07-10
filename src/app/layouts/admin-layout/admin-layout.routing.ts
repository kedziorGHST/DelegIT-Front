import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { DelegationComponent } from '../../delegation/delegation.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CustomersComponent } from '../../customers/customers.component';
import { CarsComponent } from 'app/cars/cars.component';
import { RidesComponent } from 'app/rides/rides.component';
import { ContractsComponent } from 'app/contracts/contracts.component';
import { VisitsComponent } from 'app/visits/visits.component';
import { LoginComponent } from 'app/user/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',           component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'delegation',     component: DelegationComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'clients',        component: CustomersComponent },
    { path: 'cars',           component: CarsComponent },
    { path: 'rides',          component: RidesComponent },
    { path: 'contracts',      component: ContractsComponent },
    { path: 'visits',         component: VisitsComponent },
    { path: 'login',          component: LoginComponent },
];
