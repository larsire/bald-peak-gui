import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { fadeInAnimation } from "../animations/animations";

@Component({
  selector: "app-playground",
  templateUrl: "./playground.component.html",
  styleUrls: ["./playground.component.sass"],
  animations: [
    fadeInAnimation
  ]
  })
export class PlaygroundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // if (this.router.routerState.snapshot.url !== "/playground") {
    //   this.router.navigate(["/playground"]);
    // }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated && outlet.activatedRouteData["animation"] ? outlet.activatedRoute : "";
  }

  goTo(pageName) {
    this.router.navigate([pageName]);
  }
}
