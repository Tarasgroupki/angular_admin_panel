import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./utilization/utilization.module').then(m => m.UtilizationModule)
  },
  {
    path: 'pricing',
    loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule)
  },
  {
    path: 'recomendation',
    loadChildren: () => import('./recomendation/recomendation.module').then(m => m.RecomendationModule)
  },
  {
    path: 'directory',
    loadChildren: () => import('./directory/directory.module').then(m => m.DirectoryModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
