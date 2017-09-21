import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class NoteService {

  constructor( private http:Http) { }
  getAll(){
    return this.http.get("http://localhost:8080/Note")
        .map(res => res.json());
  }
   save(note){
    return this.http.post("http://localhost:8080/Note",note)
        .map(res => res.json());
  }
  find(id){
    return this.http.get("http://localhost:8080/Note/"+id)
        .map(res => res.json());
  }
  delete(id){
    return this.http.delete("http://localhost:8080/Note/"+id)
      
  }
  update (id, note1){
    return this.http.put("http://localhost:8080/Note/"+id,note1)
        .map(res => res.json());
  }
}