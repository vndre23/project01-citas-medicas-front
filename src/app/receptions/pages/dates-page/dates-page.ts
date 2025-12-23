import { Component } from '@angular/core';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CalendarOptions} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-dates-page',
  imports: [FullCalendarModule],
  templateUrl: './dates-page.html',
  styleUrl: './dates-page.css',
})
export class DatesPage {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
}
