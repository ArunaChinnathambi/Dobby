import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable() 

export class Service {
  
  constructor(private http: Http) {}
  
  getData() {
    return this.http.get('src/data.json')
      .map(res => res.json())
  }
}


