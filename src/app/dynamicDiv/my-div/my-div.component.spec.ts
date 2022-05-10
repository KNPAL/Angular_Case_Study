import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDivComponent } from './my-div.component';

describe('MyDivComponent', () => {
  let component: MyDivComponent;
  let fixture: ComponentFixture<MyDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
