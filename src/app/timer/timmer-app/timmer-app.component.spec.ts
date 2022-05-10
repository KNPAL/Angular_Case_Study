import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimmerAppComponent } from './timmer-app.component';

describe('TimmerAppComponent', () => {
  let component: TimmerAppComponent;
  let fixture: ComponentFixture<TimmerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimmerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimmerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
