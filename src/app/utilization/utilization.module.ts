import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { UtilizationComponent } from './utilization.component';
import { UtilizationRouting } from './utilization-routing.module';
import { CommonModule } from '@angular/common';
import { ServiceModule } from '../service/service.module';
import { FullCalendarModuleMain } from '../full-calendar/full-calendar.module';

@NgModule({
  imports: [
    UtilizationRouting,
    ServiceModule,
    MaterialModule,
    CommonModule,
    FullCalendarModuleMain
  ],
  declarations: [UtilizationComponent],
  exports: [UtilizationComponent],
  providers: []
})
export class UtilizationModule { }
