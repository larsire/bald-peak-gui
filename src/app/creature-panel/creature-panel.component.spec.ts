import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreaturePanelComponent } from "./creature-panel.component";

describe("CreaturePanelComponent", () => {
  let component: CreaturePanelComponent;
  let fixture: ComponentFixture<CreaturePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaturePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaturePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
