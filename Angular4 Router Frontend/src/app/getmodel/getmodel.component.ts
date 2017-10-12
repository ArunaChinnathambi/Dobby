import { Component, OnInit } from '@angular/core';
import {Bike} from '../bike';
import {BikeService} from '../bike.service';
@Component({
  selector: 'app-getmodel',
  templateUrl: './getmodel.component.html',
  styleUrls: ['./getmodel.component.css'],
})
export class GetmodelComponent implements OnInit {

  bikeId: number;
  bik : Bike;
  constructor(private bikeservice : BikeService) {}
 
  ngOnInit() {
      
  }
  onSubmit() {
    this.bikeservice.getBike(this.bikeId).then(bikes=>this.bik={
      id:bikes.id,
      model:bikes.model,
      manufacturer:bikes.manufacturer
    });
    console.log(this.bik);
    
    }
}
