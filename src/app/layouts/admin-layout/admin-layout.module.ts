import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {ClientsComponent } from '../../clients/clients.component'
import { CarsComponent } from 'app/cars/cars.component';
import { RidesComponent } from 'app/rides/rides.component';
import { SettlementComponent } from 'app/settlement/settlement.component';
import { ContractsComponent } from 'app/contracts/contracts.component';
import { VisitsComponent } from 'app/visits/visits.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    NotificationsComponent,
    UpgradeComponent,
    ClientsComponent,
    CarsComponent,
    RidesComponent,
    SettlementComponent,
    ContractsComponent,
    VisitsComponent
  ]
})

export class AdminLayoutModule {}
