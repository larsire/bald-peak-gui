import { Component, OnInit, EventEmitter, Output, ViewChild } from "@angular/core";
import { access } from "fs";
import { SimulatorAccessService } from "../services/simulator-access.service";

@Component({
  selector: "app-creature-panel",
  templateUrl: "./creature-panel.component.html",
  styleUrls: ["./creature-panel.component.css"],
  providers: [SimulatorAccessService]
})
export class CreaturePanelComponent implements OnInit {

  constructor(private simulationAccessService: SimulatorAccessService) { }
  @Output() livingFormAdded = new EventEmitter<{name: string, id: number, creationDate: Date}>();
  creatures = [];
  newLivingFormName = "";

  ngOnInit() {
  }

  addNew() {
    const livingForm = {name: this.newLivingFormName, id: this.creatures.length + 1, creationDate: new Date()};
    this.simulationAccessService.createNewCreature(livingForm).subscribe((data) => {
      this.livingFormAdded.emit(livingForm);
      this.getList();
    });
  }

  getList() {
    this.simulationAccessService.getObjectList().subscribe((data) => {
      console.log(data);
      this.creatures = data;
    });
  }
}
