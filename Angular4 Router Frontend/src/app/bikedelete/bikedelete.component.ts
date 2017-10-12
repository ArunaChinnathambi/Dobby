import { Component, OnInit,Input } from '@angular/core';
import {Bike} from '../bike';
import {BikeService} from '../bike.service';
@Component({
  selector: 'app-bikedelete',
  templateUrl: './bikedelete.component.html',
  styleUrls: ['./bikedelete.component.css'],
  providers:[BikeService]
})
export class BikedeleteComponent implements OnInit {
@Input() bike : Bike;
  constructor(private bikeservice:BikeService) { }

  ngOnInit() {
  }
  deleteB():void{
    this.bikeservice.deleteBike(this.bike.id).then(()=>this.goBack());
  }
  goBack(): void {
    window.location.replace('');
  }
}
