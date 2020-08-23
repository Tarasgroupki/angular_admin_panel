import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilizationComponent } from './utilization.component';


const routes: Routes = [
  {
    path: '',
    component: UtilizationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilizationRouting { }
