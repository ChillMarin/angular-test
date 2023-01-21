// modules/shared/services/custom-preloading-strategy.service.ts
import { Injectable } from '@angular/core';
import { Route, PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) return load();
    //esto es para que no se carguen los modulos que no se necesitan es decir retorna un observable vacio
    else return of(null);
  }
}
