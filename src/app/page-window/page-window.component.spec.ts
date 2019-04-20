import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWindowComponent } from './page-window.component';

describe('PageWindowComponent', () => {
  let component: PageWindowComponent;
  let fixture: ComponentFixture<PageWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
