import { Component, OnInit, EventEmitter, Output, ViewChild } from "@angular/core";
import { access } from "fs";
import { SimulatorAccessService } from '../simulator-access.service';

@Component({
  selector: "app-living-form-panel",
  templateUrl: "./living-form-panel.component.html",
  styleUrls: ["./living-form-panel.component.css"], 
  providers: [SimulatorAccessService]
})
export class LivingFormPanelComponent implements OnInit {

  constructor(private simulationAccessService: SimulatorAccessService) { }
  @Output() livingFormAdded = new EventEmitter<{name: string, id: number, creationDate: Date}>();
  livingForms = [];
  newLivingFormName = "";

  ngOnInit() {
  }

  addNew() {
    const livingForm = {name: this.newLivingFormName, id: this.livingForms.length + 1, creationDate: new Date()};
    this.livingFormAdded.emit(livingForm);
    this.livingForms.push(livingForm);

    this.newLivingFormName = "";
  }

  getList() {
    this.simulationAccessService.getObjectList();
  }
}
