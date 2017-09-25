import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import {DebugElement} from '@angular/core'; 
import {By} from '@angular/platform-browser'; 
import { CounterComponent } from './counter.component'; 

describe('CounterComponent', () => {
let component: CounterComponent; 
let fixture: ComponentFixture<CounterComponent>; 
let debugElement: DebugElement; 
let htmlElement:HTMLElement;

  beforeEach(async(() => { 
TestBed.configureTestingModule({ 
declarations: [ CounterComponent ] }) 
.compileComponents(); 
})); 

  beforeEach(() => { 
fixture = TestBed.createComponent(CounterComponent); 
component = fixture.componentInstance; 
fixture.detectChanges(); 
debugElement=fixture.debugElement.query(By.css('h1')); 
htmlElement=debugElement.nativeElement; 
}); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the counter number by one', ()=>{
  const intialValue=component.counter;
  component.increment(); 
const newValue=component.counter; 
expect(newValue).toBeGreaterThan(intialValue); 
});

it('should decrement the counter number by one', () => { 
const intialValue=component.counter; 
component.decrement(); 
fixture.detectChanges(); 
const newValue=component.counter; 
expect(newValue).toBeLessThan(intialValue); 
}); 

it('should display the counter number on screen,after being incremented by one', () => {
 component.increment(); 
 fixture.detectChanges(); 
 expect(htmlElement.textContent).toEqual('Number:2'); 
 }); 
 
 it('should display the counter number on screen,after being decremented by one', () => { 
 component.decrement(); 
 fixture.detectChanges(); 
 expect(htmlElement.textContent).toEqual('Number:0'); 
}); 

});

