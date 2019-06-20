import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  pages = ["simulation", "contact", "playground"];

  ngOnInit() {
  }

  goTo(page) {
    this.router.navigate([page]);
  }
}
