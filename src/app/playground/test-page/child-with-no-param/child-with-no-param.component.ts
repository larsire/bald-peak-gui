import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-child-with-no-param",
  templateUrl: "./child-with-no-param.component.html",
  styleUrls: ["./child-with-no-param.component.sass"]
})
export class ChildWithNoParamComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addParam() {
    this.router.navigate(["playground", "test", 1]);
  }
}
