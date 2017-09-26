package com.aruna;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController

public class NoteController {
  @Autowired
  private NoteRepository repo;
  
  @GetMapping("/Note/get")
  public List<Note> getAll() {
    return repo.findAll();
  }
  
  @GetMapping("/Note/get/{id}")
  public Note find(@PathVariable Long id) {
    return  repo.findOne(id);
  }
  
  @PostMapping("/Note/save")
  public Note save(@RequestBody Note note) {
	  note.setId(null);
    return repo.saveAndFlush(note);
  }
  
  @PutMapping("/Note/update/{id}")
  public Note update(@RequestBody Note note1, @PathVariable Long id) {
    note1.setId(id);
    return repo.saveAndFlush(note1);
  }
  
  @DeleteMapping("/Note/delete/{id}")
  public void delete(@PathVariable Long id) {
    repo.delete(id);
  }
}