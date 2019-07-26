import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-page',
  templateUrl: './datepicker-page.component.html',
  styleUrls: ['./datepicker-page.component.sass']
})
export class DatepickerPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.model = new Date();
  }
  model: Date;

  showModel() {
    console.log(this.model);
  }
  generateDate() {
    var year = Math.floor((Math.random() * (+2052 - +1992))) + 1992;
    var month = Math.floor((Math.random() * (+11 - +0))) + 0;
    var day = Math.floor((Math.random() * (+30 - +1))) + 1;

    var hours = Math.floor((Math.random() * (+23 - +0))) + 0;
    var minutes = Math.floor((Math.random() * (+59 - +0))) + 0;

    this.model = new Date(year, month, day, hours, minutes);
  }
}
