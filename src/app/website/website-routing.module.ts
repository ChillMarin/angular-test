import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path:'login',
        loadChildren:() => import('./pages/login/login.module').then(m => m.LoginModule),
        data: {
          preload: true
        }
      },
      {
        path:'register',
        component: RegisterComponent
      },
      {
        path:'cursos',
        loadChildren:() => import('./pages/cursos/cursos.module').then(m => m.CursosModule),
        data: {
          preload: true
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
