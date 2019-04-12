import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingFormComponent } from './living-form.component';

describe('LivingFormComponent', () => {
  let component: LivingFormComponent;
  let fixture: ComponentFixture<LivingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
