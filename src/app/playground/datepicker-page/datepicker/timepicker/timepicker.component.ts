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
    if(this.checkIfAvailable(this.data.getHours() + 1, this.data.getMinutes())) {
      this.data.setHours(this.data.getHours() + 1);
      this.updateInnerModels();
    }
  }

  prevHour() {
    if(this.checkIfAvailable(this.data.getHours() - 1, this.data.getMinutes())) {
      this.data.setHours(this.data.getHours() - 1);
      this.updateInnerModels();
    }
  }

  nextMinute() {
    if(this.checkIfAvailable(this.data.getHours(), this.data.getMinutes() + 1)) {
      this.data.setMinutes(this.data.getMinutes() + 1);
      this.updateInnerModels();
    }
  }

  prevMinute() {
    if(this.checkIfAvailable(this.data.getHours(), this.data.getMinutes() - 1)) {
      this.data.setMinutes(this.data.getMinutes() - 1);
      this.updateInnerModels();
    }
  }

  checkIfAvailable(targetHours, targetMinutes) {
    const tempDate = new Date(this.data.getFullYear(), this.data.getMonth(), this.data.getDate(), targetHours, targetMinutes);
    const tempMax = new Date(this.max.getFullYear(), this.max.getMonth(), this.max.getDate());
    const tempMin = new Date(this.min.getFullYear(), this.min.getMonth(), this.min.getDate());
    let valid = true;
    if( tempMax.getTime() < tempDate.getTime()) {
      valid = false;
    } else if (tempMin.getTime() > tempDate.getTime()) {
      valid = false;
    }
    return valid;
  }
}
