import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.sass']
})
export class DatepickerComponent implements OnInit {
  @Input() model: Date;
  @Input() submitAction: Function;
  showCalendar = false;
  innerModel: Date;

  showButton() {
    if(!this.model) {
      this.innerModel = new Date();
    } else {
      this.innerModel = new Date(this.model);
    }

    this.showCalendar = true;
  }

  constructor() { }
  ngOnInit() {
  }

  nextYear() {
    this.innerModel.setFullYear(this.innerModel.getFullYear() + 1);
  }

  prevYear() {
    this.innerModel.setFullYear(this.innerModel.getFullYear() - 1);
  }

  nextMonth() {
    this.innerModel.setMonth(this.innerModel.getMonth() + 1);
  }

  prevMonth() {
    this.innerModel.setMonth(this.innerModel.getMonth() - 1);
  }

  submit() {
    this.model = new Date(this.innerModel);
    this.showCalendar = false;
    
    if(this.submitAction && typeof this.submitAction === 'function') {
      this.submitAction();
    }
  }
}
