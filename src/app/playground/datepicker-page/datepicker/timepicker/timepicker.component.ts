import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.sass']
})
export class TimepickerComponent implements OnInit, OnChanges {
  @Input() data: Date;
  @Input() min: Date;
  @Input() max: Date;
  constructor() { }

  minutes: number;
  hours: number;

  ngOnInit() {
  }

  ngOnChanges() {
    this.updateInnerModels();
  }

  updateInnerModels() {
    this.minutes = this.data.getMinutes();
    this.hours = this.data.getHours();
  }

  updateMinutes(event) {
    if (this.minutes > 59) {
      this.minutes = 59;
    }
    if (this.minutes < 0) {
      this.minutes = 0;
    }
    this.data.setMinutes(this.minutes);
  }

  updateHours() {
    if (this.hours > 23) {
      this.hours = 23;
    }
    if (this.hours < 0) {
      this.hours = 0;
    }
    this.data.setHours(this.hours);
  }

  nextHour() {
    this.data.setHours(this.data.getHours() + 1);
    this.updateInnerModels();
  }

  prevHour() {
    this.data.setHours(this.data.getHours() - 1);
    this.updateInnerModels();
  }

  nextMinute() {
    this.data.setMinutes(this.data.getMinutes() + 1);
    this.updateInnerModels();
  }

  prevMinute() {
    this.data.setMinutes(this.data.getMinutes() - 1);
    this.updateInnerModels();
  }
}
