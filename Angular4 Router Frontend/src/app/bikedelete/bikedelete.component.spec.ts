import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikedeleteComponent } from './bikedelete.component';

describe('BikedeleteComponent', () => {
  let component: BikedeleteComponent;
  let fixture: ComponentFixture<BikedeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikedeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
