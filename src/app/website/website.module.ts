import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { Section1Component } from './pages/home/section1/section1.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { HomeSection2Component } from './pages/home/home-section2/home-section2.component';
import { HomeSection3Component } from './pages/home/home-section3/home-section3.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    HomeComponent,
    Section1Component,
    CursosComponent,
    HomeSection2Component,
    HomeSection3Component,
    LoginComponent,
    LayoutComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
