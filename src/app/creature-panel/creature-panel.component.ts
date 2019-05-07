import { Component, OnInit, EventEmitter, Output, ViewChild } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { SimulatorAccessService } from "../services/simulator-access.service";

@Component({
  selector: "app-creature-panel",
  templateUrl: "./creature-panel.component.html",
  styleUrls: ["./creature-panel.component.css"],
  providers: [SimulatorAccessService]
})
export class CreaturePanelComponent implements OnInit {

  constructor(private simulationAccessService: SimulatorAccessService, private socket: Socket) {
    this.getList();
    this.creature = {};
    this.socket.on("updateCreatureList", (data) => {
      this.creatures = data;
    });
   }
  @Output() livingFormAdded = new EventEmitter<{}>();

  creatures = [];
  creature: {};

  ngOnInit() {
  }

  addNew() {
    this.simulationAccessService.createNewCreature(this.creature).subscribe((data) => {
      this.creature = {};
      this.livingFormAdded.emit(this.creature);
    });
  }

  getList() {
    this.simulationAccessService.getObjectList().subscribe((data: any) => {
      this.creatures = data;
    });
  }
}
