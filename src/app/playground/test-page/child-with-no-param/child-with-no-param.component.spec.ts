import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithNoParamComponent } from './child-with-no-param.component';

describe('ChildWithNoParamComponent', () => {
  let component: ChildWithNoParamComponent;
  let fixture: ComponentFixture<ChildWithNoParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildWithNoParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWithNoParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
