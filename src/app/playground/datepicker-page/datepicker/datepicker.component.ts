import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.sass']
})
export class DatepickerComponent implements OnInit {
  @Input() model: Date;
  @Input() min?: Date;
  @Input() max?: Date;
  @Input() submitAction: Function;

  showCalendar = false;
  innerModel: Date;

  showButton() {
    if (!this.model) {
      this.innerModel = new Date();
    } else {
      this.innerModel = new Date(this.model);
    }

    this.showCalendar = true;
  }

  constructor() { }
  ngOnInit() {
  }

  checkPrevYearAvailable() {
    return this.min ? this.innerModel.getFullYear() - 1 >= this.min.getFullYear() : true
   }
   
   checkNextYearAvailable() {
     return this.max ? this.innerModel.getFullYear() + 1 <= this.max.getFullYear() : true;
   }
   
   checkPrevMonthAvailable() {
     return this.min ? this.innerModel.getMonth() - 1 >= this.min.getMonth() : true;
   }
   
   checkNextMonthAvailable() {
     return this.max ? this.innerModel.getMonth() + 1 <= this.max.getMonth() : true;
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
