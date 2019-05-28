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
      console.log("Received creature list : ", data);
      this.creatures = data;
    });
   }

  creatures = [];
  creature: {};

  ngOnInit() {
  }

  addNew() {
    this.simulationAccessService.createNewCreature(this.creature).subscribe((data) => {
      this.creature = {};
    });
  }

  addNewObstacle() {
    const obstacle = {
      axisX: Math.ceil(Math.random() % 10 * 10),
      axisY: Math.ceil(Math.random() % 10 * 10)
    };
    this.simulationAccessService.addNewObstacle(obstacle).subscribe((data) => {
    });
  }

  getList() {
    this.simulationAccessService.getObjectList().subscribe((data: any) => {
      this.creatures = data;
    });
  }
}
