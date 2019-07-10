import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { LoginLayoutRoutes } from './login-layout.routing';

import { LoginComponent } from 'app/user/login/login.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    LoginComponent
  ]
})

export class LoginLayoutModule {}
