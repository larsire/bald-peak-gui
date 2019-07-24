import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-test-page",
  templateUrl: "./test-page.component.html",
  styleUrls: ["./test-page.component.sass"]
})
export class TestPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        const test = Observable.create(observer => {
      let   c = 0;
      setInterval(() => {
        console.log('OBS :', c);
        c++;
        if ( c === 2 ) {
          observer.complete();
        }
        if (c > 3) {
          c = 0;
          observer.error(new Error('c > 3'));
        } else {
          observer.next(c);
        }
      }, 1000);
    });

    test.subscribe(data => {
      console.log('SUBS', data);
    }, (error) => {
      console.warn('ERROR : ', error);
    }, () => {
      console.log('COMPLETE');
    });
  }

}
