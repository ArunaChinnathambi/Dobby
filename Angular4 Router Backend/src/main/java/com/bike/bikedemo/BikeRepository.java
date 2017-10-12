package com.bike.bikedemo;
import java.io.Serializable;
import org.springframework.data.repository.CrudRepository;
import  com.bike.bikedemo.Bike;
 
public interface BikeRepository extends CrudRepository<Bike, Serializable> {
 
}