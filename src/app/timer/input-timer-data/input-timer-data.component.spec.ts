import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTimerDataComponent } from './input-timer-data.component';

describe('InputTimerDataComponent', () => {
  let component: InputTimerDataComponent;
  let fixture: ComponentFixture<InputTimerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTimerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTimerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
