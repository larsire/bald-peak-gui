import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingFormPanelComponent } from './living-form-panel.component';

describe('LivingFormPanelComponent', () => {
  let component: LivingFormPanelComponent;
  let fixture: ComponentFixture<LivingFormPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingFormPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingFormPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
