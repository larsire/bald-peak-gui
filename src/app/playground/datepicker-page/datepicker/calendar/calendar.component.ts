import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit, OnChanges {
  @Input() data: Date;
  firstDayIndex: number;
  lastDayIndex: number;
  dayLabels = ["Pn", "Wt", "Śr", "Cz", "Pt", "Sb", "Nd"];
  currentMonth: number;
  days: any[];
  constructor() { }

  ngOnInit() {
    this.generateCalendar();
  }

  ngOnChanges() {
    this.generateCalendar();
  }

  generateCalendar() {
    let date = new Date(this.data.getFullYear(), this.data.getMonth(), 1);
    let lastMonthDay = new Date(this.data.getFullYear(), this.data.getMonth() + 1, 0);
    this.currentMonth = this.data.getMonth();
    this.firstDayIndex = date.getDay();
    this.lastDayIndex = lastMonthDay.getDay();

    this.days = [];
    if(this.firstDayIndex !== 1) {
      let previousMounthLastDay = new Date(this.data.getFullYear(), this.data.getMonth(), 0);
      for(let d = previousMounthLastDay.getDay(); d > 0; d--) {
        this.days.push({dayNumber: previousMounthLastDay.getDate() - d, currentMonth: false});
      }
    }
    
    for(let i = 1; i <= lastMonthDay.getDate(); i++) {
      this.days.push({dayNumber: i, currentMonth: true});
    }
    if(this.lastDayIndex !== 0) {
      this.fillRemainingDays();
    }
  }

  fillRemainingDays() {
    for(let d = this.lastDayIndex; d <= 6; d++) {
      this.days.push({dayNumber: d, currentMonth: false});
    }
  }

  dayChecked(day) {
    console.log(day);
  }
}
