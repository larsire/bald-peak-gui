import { Component, Input } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slideInAnimation } from "./animations/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [
    "./app.component.css"
  ],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = "angular-electron";

  onLivingFormAdded(livingForm: {}) {
    console.log("Added successfully : ", livingForm);
  }

  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet);
    return outlet.isActivated && outlet.activatedRouteData["animation"] ? outlet.activatedRoute : "";
  }

  animationStarted(event) {
    console.log(event);
  }

  animationEnded(event) {
    console.log(event);
  }
}
