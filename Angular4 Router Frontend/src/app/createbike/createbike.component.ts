import {Bike} from '../bike';
import {BikeService} from '../bike.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-bike',
  templateUrl: './createbike.component.html',
  styleUrls: ['./createbike.component.css']
})
 
export class CreateBikeComponent implements OnInit {
  
  bike = new Bike;
  submitted = false;
  constructor(private bikeService: BikeService,  private location : Location) {}
 
  ngOnInit() {
  }
 
  newBike(): void {
    this.submitted = false;
    this.bike = new Bike();
  }
 
  private save(): void {
    this.bikeService.createBike(this.bike);
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
 
  goBack(): void {
    this.location.back();
  }
}