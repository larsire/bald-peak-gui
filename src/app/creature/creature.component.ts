import { Component, OnInit, Input } from "@angular/core";
import { SimulatorAccessService } from "../services/simulator-access.service";

@Component({
  selector: "app-creature",
  templateUrl: "./creature.component.html",
  styleUrls: ["./creature.component.css"]
})
export class CreatureComponent implements OnInit {
  @Input() data: { name: string, id: number, creationDate: Date};
  constructor(private simulationAccessService: SimulatorAccessService) { }
  inventoryVisible = false;


  ngOnInit() {
  }

  toggleInventory() {
    this.inventoryVisible = !this.inventoryVisible;
  }

  moveCreature(direction) {
    const moveObject = {
      direction: direction,
      id: this.data.id
    };
    this.simulationAccessService.moveCreature(moveObject).subscribe((data: any) => {
    });
  }
}
