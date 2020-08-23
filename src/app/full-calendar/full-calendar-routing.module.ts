import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullCalendarComponent } from './full-calendar.component';


const routes: Routes = [
  {
    path: '',
    component: FullCalendarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullCalendarRouting { }
