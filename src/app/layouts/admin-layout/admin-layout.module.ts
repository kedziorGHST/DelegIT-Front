import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { DelegationComponent } from '../../delegation/delegation.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CustomersComponent } from '../../customers/customers.component';
import { CustomersListComponent } from '../../customers/customers-list/customers-list.component';
import { CarsComponent } from 'app/cars/cars.component';
import { RidesComponent } from 'app/rides/rides.component';
import { ContractsComponent } from 'app/contracts/contracts.component';
import { VisitsComponent } from 'app/visits/visits.component';
import { LoginComponent } from 'app/user/login/login.component';
import { DeleagationListComponent } from 'app/delegation/deleagation-list/deleagation-list.component';
import { RidesListComponent } from 'app/rides/rides-list/rides-list.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    DelegationComponent,
    DeleagationListComponent,
    NotificationsComponent,
    UpgradeComponent,
    CustomersComponent,
    CustomersListComponent,
    CarsComponent,
    RidesComponent,
    RidesListComponent,
    ContractsComponent,
    VisitsComponent,
    LoginComponent
  ]
})

export class AdminLayoutModule {}
