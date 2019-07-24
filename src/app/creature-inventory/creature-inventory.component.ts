import { Component, OnInit, Input} from '@angular/core';
import { SimulatorAccessService } from '../services/simulator-access.service';

@Component({
  selector: 'app-creature-inventory',
  templateUrl: './creature-inventory.component.html',
  styleUrls: ['./creature-inventory.component.sass']
})
export class CreatureInventoryComponent implements OnInit {
  @Input() inventory: { name: string, id: number, creationDate: Date};
  constructor(private simulationAccessService: SimulatorAccessService) {

   }

  ngOnInit() {
  }

  addTestItem() {
    this.simulationAccessService.addItem(1, {});
  }
}
