package com.aruna;

public class NoterBuilder {
  private Note note = new Note();
  
  public NoteBuilder id(int id) {
	  note.setId(id);
    return this;
  }
  
  public NoteBuilder date(String date) {
	  note.setDate(date);
    return this;
  }

  puplic NoteBuilder notes(string notes){
      note.setNotes(notes);
    return this;  
  }
  
  public Character build() {
    return character;
  }
}