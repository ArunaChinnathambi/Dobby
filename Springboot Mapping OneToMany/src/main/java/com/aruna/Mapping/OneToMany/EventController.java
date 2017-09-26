package com.aruna.mapping.OneToMany;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.aruna.mapping.OneToMany.Agenda;

import com.aruna.mapping.OneToMany.Event;

import com.aruna.mapping.OneToMany.EventRepository;

@RestController
@RequestMapping("/rest/Event")
public class EventController {
private EventRepository eventRepository;
public EventController(EventRepository eventRepository) {
this.eventRepository = eventRepository;
}

@RequestMapping(method = RequestMethod.GET)
public List<Event> allEvents() {
return eventRepository.findAll();
}

@RequestMapping(value = "/{id}",method = RequestMethod.GET)
public Event findoneEvent(@PathVariable Long id) {
return eventRepository.findOne(id);
}

@RequestMapping(method = RequestMethod.POST)
public Event addEvent(@RequestBody Event event) {
return eventRepository.saveAndFlush(event);
}

@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
public Event updateEvent(@RequestBody Event updateEvent, @PathVariable Long id) {
updateEvent.setId(id);
return eventRepository.saveAndFlush(updateEvent);
}

@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
public void deleteEvent(@PathVariable Long id) {
eventRepository.delete(id);
}

}
