import { Component, OnInit, EventEmitter, Output, ViewChild } from "@angular/core";

@Component({
  selector: "app-living-form-panel",
  templateUrl: "./living-form-panel.component.html",
  styleUrls: ["./living-form-panel.component.css"]
})
export class LivingFormPanelComponent implements OnInit {

  constructor() { }
  @Output() livingFormAdded = new EventEmitter<{name: string, id: number, creationDate: Date}>();
  livingForms = [];
  newLivingFormName = "";
  // @ViewChild("newLivingFormName") newLivingFormName: ElementRef;
  ngOnInit() {
  }

  addNew() {
    const livingForm = {name: this.newLivingFormName, id: this.livingForms.length + 1, creationDate: new Date()};
    this.livingFormAdded.emit(livingForm);
    this.livingForms.push(livingForm);

    this.newLivingFormName = "";
  }
}
