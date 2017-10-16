import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { Service } from './service'
import { HttpModule } from '@angular/http';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  name:string;
  userForm: FormGroup;
  fields: any;
  
  ngOnInit() {
    this.fields = {
      isRequired: true,
      type: {
        options: [
          {
            label: 'Option 1',
            value: '1'
          },
          {
            label: 'Option 2',
            value: '2'
          },
          {
            label: 'Option 3',
            value: '3'
          }
        ]
      }
    };
    this.userForm = this.fb.group({
      type: this.fb.group({
        options: this.fb.array([])   
      })
    });
    this.patch()
  }
  
  submit(value) {
    console.log(value);
  }
  
  constructor(private fb: FormBuilder) {  }

  patch() {
    // const control = <FormArray>this.userForm.controls.type.controls.options;
    // this.fields.type.options.forEach(x => {
    //   control.push(this.patchValues(x.label, x.value))
    // })
  }
  
  patchValues(label, value) {
    return this.fb.group({
      label: [label],
      value: [value]
    })    
  }

}
