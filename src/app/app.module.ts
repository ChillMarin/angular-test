import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { Section1Component } from './pages/home/section1/section1.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { HomeSection2Component } from './pages/home/home-section2/home-section2.component';
import { HomeSection3Component } from './pages/home/home-section3/home-section3.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    Section1Component,
    CursosComponent,
    HomeSection2Component,
    HomeSection3Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class AppModule { }
