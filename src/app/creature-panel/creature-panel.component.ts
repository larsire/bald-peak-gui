import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { SimulatorAccessService } from "../services/simulator-access.service";
import { Subscription } from "rxjs";
import { first } from "rxjs/operators";

@Component({
  selector: "app-creature-panel",
  templateUrl: "./creature-panel.component.html",
  styleUrls: ["./creature-panel.component.css"],
  providers: [SimulatorAccessService]
})
export class CreaturePanelComponent implements OnInit {
  constructor(private simulationAccessService: SimulatorAccessService, private socket: Socket, private ref: ChangeDetectorRef) {
    this.creature = {};
    this.openedCreaturesData = [];
    this.socket.on("updateCreatureList", (data) => {
      this.tempData = data;
    });

    setInterval(() => {
      if (this.tempData.length) {
        this.creatures = [...this.tempData];
        this.tempData = [];
      }
    }, 1000);
  }

  tempData = [];
  simulationSubscription: Subscription;
  creatures = [];
  creature: {};
  openedCreaturesData: any[];

  ngOnInit() {
    this.getListAndUpdate();
  }

  addNew() {
    this.simulationAccessService.createNewCreature(this.creature).pipe(first()).subscribe(() => {
      this.creature = {};
      this.getListAndUpdate();
    });
  }

  addNewObstacle() {
    const obstacle = {
      axisX: Math.ceil(Math.random() % 10 * 10),
      axisY: Math.ceil(Math.random() % 10 * 10)
    };
    this.simulationAccessService.addNewObstacle(obstacle).pipe(first()).subscribe(() => {
    });
  }

  refresh() {
    this.ref.detectChanges();
  }

  getListAndUpdate() {
    if (!this.tempData.length) {
      this.simulationAccessService.getObjectList().pipe(first()).subscribe((data: any) => {
        this.creatures = data;
      });
    } else {
      this.creatures = [...this.tempData];
    }
    this.tempData = [];
  }

  isOpened(creatureId) {
    return this.openedCreaturesData.indexOf(creatureId) !== -1;
  }

  toggleExtendedData(creatureId) {
    if (this.isOpened(creatureId)) {
      this.openedCreaturesData.splice(this.openedCreaturesData.indexOf(creatureId), 1);
    } else {
      this.openedCreaturesData.push(creatureId);
    }
  }
}
