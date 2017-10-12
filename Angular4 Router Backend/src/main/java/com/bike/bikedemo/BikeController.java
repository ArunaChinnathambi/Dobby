package com.bike.bikedemo;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.bike.bikedemo.Bike;
import com.bike.bikedemo.BikeService;

@RestController
@RequestMapping("/bike")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class BikeController {

   @Autowired
   private BikeService bikeService;

   @RequestMapping(value = "/allBikes", method = RequestMethod.GET)
   public List<Bike> getAllBikes() {

       return bikeService.getAllBikes();
   }

   @RequestMapping(value = "/getBike/{bikeId}", method = RequestMethod.GET)
   public Bike getBike(@PathVariable("bikeId") Integer bikeId) {
       System.out.println(bikeId);
       return bikeService.getBike(bikeId);
   }

   @RequestMapping(value = "/createBike", method = RequestMethod.POST)
   public Bike createBike(@RequestBody Bike bike) {
       return bikeService.createBike(bike);
   }

   @RequestMapping(value = "/updateBike/{bikeId}", method = RequestMethod.PUT)
   public Bike updateBike(@RequestBody Bike bike, @PathVariable("bikeId") Integer bikeId) {
       return bikeService.updateBike(bike,bikeId);
   }
   
   @RequestMapping(value = "/deleteBike/{bikeId}", method = RequestMethod.DELETE)
   public void deleteBike(@PathVariable("bikeId") Integer bikeId) {
       bikeService.deleteBike(bikeId);
   }

}

