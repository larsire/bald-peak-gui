import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithParamComponent } from './child-with-param.component';

describe('ChildWithParamComponent', () => {
  let component: ChildWithParamComponent;
  let fixture: ComponentFixture<ChildWithParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildWithParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWithParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
