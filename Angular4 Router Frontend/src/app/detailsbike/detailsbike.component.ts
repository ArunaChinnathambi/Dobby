import { Component, OnInit,Input } from '@angular/core';
import { Location } from '@angular/common';
import { Bike } from '../bike';
import { BikeService } from '../bike.service'
@Component({
  selector: 'app-detailsbike',
  templateUrl: './detailsbike.component.html',
  styleUrls: ['./detailsbike.component.css'],
  providers: [BikeService]
})
export class DetailsbikeComponent implements OnInit {
  bikes: Bike[];
  bikeselected: Bike;
  constructor(private bikeservice : BikeService) { }
  getbikes(){
    this.bikeservice.getBikes().then(bikes => this.bikes = bikes);
  }
  ngOnInit() {
    this.getbikes();
  }
  onSelect(bikeselected : Bike): void {
    this.bikeselected = bikeselected;
  }
}
