import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule }from 'ngx-quicklink'

import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    QuicklinkModule
  ]
})
export class LoginModule { }
