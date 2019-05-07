import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [
    "./app.component.css"
  ]
})
export class AppComponent {
  title = "angular-electron";

  onLivingFormAdded(livingForm: {}) {
    console.log("Added successfully : ", livingForm);
  }
}
