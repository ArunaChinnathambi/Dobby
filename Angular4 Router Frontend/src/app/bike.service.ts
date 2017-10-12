import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
 
import { Bike } from './bike';
 
@Injectable()
export class BikeService {
 
  private headers = new Headers({'Content-Type': 'application/json'});
 
  constructor(private http: Http) {}
 
  getBikes(): Promise<Bike[]> {
    return this.http.get('http://localhost:8181/bike/allBikes')
      .toPromise()
      .then(response => response.json() as Bike[])
      .catch(this.handleError);
  }
 
  createBike(bike : Bike): Promise<Bike> {
    return this.http.post('http://localhost:8181/bike/createBike',JSON.stringify(bike), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Bike)
      .catch(this.handleError);
  }
 deleteBike(id : number): Promise<void>{
     return this.http.delete('http://localhost:8181/bike/deleteBike/' +id, {headers : this.headers})
     .toPromise()
     .then(()=>null) 
     .catch(this.handleError);    
 }
 getBike(bikeId : number):Promise<Bike>{
     console.log(bikeId);
     return this.http.get('http://localhost:8181/bike/getBike/' +bikeId, {headers : this.headers})
     .toPromise()
     .then(response => response.json() as Bike)
     .catch(this.handleError);  
 }
 
  private handleError(error: any): Promise<any> {
    console.error('Error', error); 
    return Promise.reject(error.message || error);
  }
}