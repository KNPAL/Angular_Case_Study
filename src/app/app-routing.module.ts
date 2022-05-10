import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: 'Banner',
    loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)
  },
  {
    path: 'DynmicDiv',
    loadChildren: () => import('./dynamicDiv/dynmicDiv.module').then(m => m.DynmicDivModule)
  },
  {
    path: 'eCommerce',
    loadChildren: () => import('./eCommerce/ecommerce.module').then(m => m.EcommerceModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule)
  },
  {
    path: 'timerApp',
    loadChildren: () => import('./timerApp/timerApp.module').then(m => m.TimerAppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
