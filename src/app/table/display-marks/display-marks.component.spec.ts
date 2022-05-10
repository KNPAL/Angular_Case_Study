import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMarksComponent } from './display-marks.component';

describe('DisplayMarksComponent', () => {
  let component: DisplayMarksComponent;
  let fixture: ComponentFixture<DisplayMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
