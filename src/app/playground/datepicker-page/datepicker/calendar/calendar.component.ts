import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit, DoCheck {
  @Input() data: Date;
  firstDayIndex: number;
  lastDayIndex: number;
  dayLabels = ["Pn", "Wt", "Śr", "Cz", "Pt", "Sb", "Nd"];
  currentMonth: number;
  currentDay: number;
  days: any[];
  currentYear: number;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if(this.data.getDate() !== this.currentDay ||
       this.data.getMonth() !== this.currentMonth ||
       this.data.getFullYear() !== this.currentYear) {
      this.generateCalendar();
    }
  }

  generateCalendar() {
    this.currentMonth = this.data.getMonth();
    this.currentDay = this.data.getDate();
    this.currentYear = this.data.getFullYear();
    let firstDay = new Date(this.currentYear, this.currentMonth, 1);
    this.firstDayIndex = firstDay.getDay();
    this.days = [];

    this.fillPreviousMonthDays();
    this.generateCurrentMonthDays();
    if(this.lastDayIndex !== 0) {
      this.fillRemainingDays();
    }
  }

  generateCurrentMonthDays() {
    let lastMonthDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    this.lastDayIndex = lastMonthDay.getDay();

    for(let i = 1; i <= lastMonthDay.getDate(); i++) {
      this.days.push({dayNumber: i, month: this.currentMonth});
    }
  }

  fillPreviousMonthDays() {
    if(this.firstDayIndex !== 1) {
      let previousMounthLastDay = new Date(this.currentYear, this.currentMonth, 0);
      for(let d = previousMounthLastDay.getDay() - 1; d > -1; d--) {
        this.days.push({dayNumber: previousMounthLastDay.getDate() - d, month: this.currentMonth - 1});
      }
    }
  }
  fillRemainingDays() {
    var dayNumber = 1;
    for(let d = this.lastDayIndex; d <= 6; d++) {
      this.days.push({dayNumber: dayNumber, month: this.currentMonth + 1});
      dayNumber++;
    }
  }

  dayChecked(day) {
    this.data.setMonth(day.month);
    this.data.setDate(day.dayNumber);
    this.generateCalendar();
  }
}
