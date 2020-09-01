import {Component, OnInit, ViewChild} from '@angular/core';
// import { CalendarComponent } from 'ng-fullcalendar';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import ruLocale from '@fullcalendar/core/locales/ru';


@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss']
})

export class FullCalendarComponent implements OnInit {
  title = 'full-calendar';
  locales = [esLocale, ruLocale];
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-09-01 12:30:00' },
      { title: 'event 2', date: '2020-09-01 13:30:00' }
    ],
    locales: this.locales,
    locale: 'ru'
  };
  // @ViewChild(FullCalendarComponent) ucCalendar: FullCalendarComponent;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleDateClick(arg): void {
    alert('date click! ' + arg.dateStr);
  }
}
