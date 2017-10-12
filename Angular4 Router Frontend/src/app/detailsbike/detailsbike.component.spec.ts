import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsbikeComponent } from './detailsbike.component';

describe('DetailsbikeComponent', () => {
  let component: DetailsbikeComponent;
  let fixture: ComponentFixture<DetailsbikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsbikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
