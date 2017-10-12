import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmodelComponent } from './getmodel.component';

describe('GetmodelComponent', () => {
  let component: GetmodelComponent;
  let fixture: ComponentFixture<GetmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
