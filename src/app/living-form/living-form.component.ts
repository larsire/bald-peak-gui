import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-living-form",
  templateUrl: "./living-form.component.html",
  styleUrls: ["./living-form.component.css"]
})
export class LivingFormComponent implements OnInit {
  @Input() data: { name: string, id: number, creationDate: Date};
  constructor() { }

  ngOnInit() {
  }
}
