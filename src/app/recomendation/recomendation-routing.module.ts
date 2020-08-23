import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomendationComponent } from './recomendation.component';


const routes: Routes = [
  {
    path: '',
    component: RecomendationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecomendationRouting { }
