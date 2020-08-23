import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FullCalendarComponent } from './full-calendar.component';
import { FullCalendarRouting } from './full-calendar-routing.module';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    FullCalendarModule,
    FullCalendarRouting,
    MaterialModule,
    CommonModule
  ],
  declarations: [FullCalendarComponent],
  exports: [FullCalendarComponent],
  providers: []
})
export class FullCalendarModuleMain { }
