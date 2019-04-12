import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-electron";

  onLivingFormAdded(livingForm: {name: string, id: number, creationDate: Date}) {
    console.log("Added successfully : ", livingForm);
  }
}
