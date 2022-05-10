import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterlogComponent } from './counterlog.component';

describe('CounterlogComponent', () => {
  let component: CounterlogComponent;
  let fixture: ComponentFixture<CounterlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
