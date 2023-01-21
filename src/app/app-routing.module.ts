import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy }from 'ngx-quicklink'
import { CustomPreloadingStrategyService } from './shared/services/custom-preloading-strategy.service';


const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./website/website.module').then(m => m.WebsiteModule),
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: CustomPreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
