import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit, DoCheck {
  @Input() data: Date;
  @Input() min: Date;
  @Input() max: Date;

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
    if (this.data.getDate() !== this.currentDay ||
       this.data.getMonth() !== this.currentMonth ||
       this.data.getFullYear() !== this.currentYear) {
      this.generateCalendar();
    }
  }

  generateCalendar() {
    this.currentMonth = this.data.getMonth();
    this.currentDay = this.data.getDate();
    this.currentYear = this.data.getFullYear();
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    this.firstDayIndex = firstDay.getDay();
    this.days = [];

    this.fillPreviousMonthDays();
    this.generateCurrentMonthDays();
    if (this.lastDayIndex !== 0) {
      this.fillRemainingDays();
    }
  }

  generateCurrentMonthDays() {
    const lastMonthDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    this.lastDayIndex = lastMonthDay.getDay();

    for (let i = 1; i <= lastMonthDay.getDate(); i++) {
      this.days.push({dayNumber: i, month: this.currentMonth, year: this.currentYear});
    }
  }

  fillPreviousMonthDays() {
    if (this.firstDayIndex !== 1) {
      let previousMounthLastDay = new Date(this.currentYear, this.currentMonth, 0);
      for (let d = previousMounthLastDay.getDay() - 1; d > -1; d--) {
        this.days.push({dayNumber: previousMounthLastDay.getDate() - d, month: this.currentMonth - 1, year: previousMounthLastDay.getFullYear()});
      }
    }
  }
  fillRemainingDays() {
    let dayNumber = 1;
    let nextMonthFirstDay = new Date(this.currentYear, this.currentMonth + 1, 1);

    for (let d = this.lastDayIndex; d <= 6; d++) {
      this.days.push({dayNumber: dayNumber, month: this.currentMonth + 1, year: nextMonthFirstDay.getFullYear()});
      dayNumber++;
    }
  }

  checkIfDayAvailable(day) {
    let available = true;
    const targetDate = new Date(day.year, day.month, day.dayNumber);
    if (this.max ? targetDate.getTime() > this.max.getTime() : false) {
          available = false;
    } else if (this.min ? targetDate.getTime() < this.min.getTime() : false)  {
      available = false;
    }
    return available;
  }

  dayChecked(day) {
    if (this.checkIfDayAvailable(day)) {
      this.data.setMonth(day.month);
      this.data.setDate(day.dayNumber);
      this.generateCalendar();
    }
  }
}
