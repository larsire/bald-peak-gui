import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-creature",
  templateUrl: "./creature.component.html",
  styleUrls: ["./creature.component.css"]
})
export class CreatureComponent implements OnInit {
  @Input() data: { name: string, id: number, creationDate: Date};
  constructor() { }

  ngOnInit() {
  }
}
