package com.bike.bikedemo;
import com.bike.bikedemo.Bike;
import java.util.List;
 
public interface BikeService {
 
	List<Bike> getAllBikes();
	
	Bike getBike(Integer bikeId);
	
	Bike createBike(Bike bike);
	
	Bike updateBike(Bike bike,Integer bikeId);
 
	void deleteBike(Integer bikeId);
 
}