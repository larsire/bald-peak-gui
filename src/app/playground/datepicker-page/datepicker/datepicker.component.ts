import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.sass']
})
export class DatepickerComponent implements OnInit {
  @Input() model: Date;

  constructor() { }
  ngOnInit() {
  }

  nextYear() {
    this.model.setFullYear(this.model.getFullYear() + 1);
    this.model = new Date(this.model);
  }

  prevYear() {
    this.model.setFullYear(this.model.getFullYear() - 1);
    this.model = new Date(this.model);
  }

  nextMonth() {
    this.model.setMonth(this.model.getMonth() + 1);
    this.model = new Date(this.model);
  }

  prevMonth() {
    this.model.setMonth(this.model.getMonth() - 1);
    this.model = new Date(this.model);
  }
}
