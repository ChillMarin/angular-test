import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { Section1Component } from './pages/home/section1/section1.component';
import { HomeSection2Component } from './pages/home/home-section2/home-section2.component';
import { HomeSection3Component } from './pages/home/home-section3/home-section3.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/user/profile/profile.component';



@NgModule({
  declarations: [
    HomeComponent,
    Section1Component,
    HomeSection2Component,
    HomeSection3Component,
    LayoutComponent,
    NavComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule
  ]
})
export class WebsiteModule { }
