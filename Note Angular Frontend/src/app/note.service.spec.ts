import { TestBed, async, inject } from '@angular/core/testing';
import { Note } from './note';
import { NoteService } from './note.service';

describe('NoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteService]
    });
  });

  it('should ...', inject([NoteService], (service: NoteService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAll()', () => {

    it('should return an empty array by default', inject([NoteService], (service: NoteService) => {
      expect(service.getAll()).toEqual([]);
    }));

    it('should return all notes', inject([NoteService], (service: NoteService) => {
      let note1 = new Note({date: '10/03/2017', notes: 'Welcome'});
      let note2 = new Note({date: '10/04/2017', notes: 'hai'});
      service.save(note1);
      service.save(note2);
      expect(service.getAll()).toEqual([note1, note2]);
    }));

  });

  describe('#save(note)', () => {

    it('should automatically assign an incrementing id', inject([NoteService], (service: NoteService) => {
      let note1 = new Note({date: '10/03/2017', notes: 'Welcome'});
      let note2 = new Note({date: '10/04/2017', notes: 'hai'});
      service.save(note1);
      service.save(note2);
      expect(service.find(1)).toEqual(note1);
      expect(service.find(2)).toEqual(note2);
    }));

  });

  describe('#delete(id)', () => {

    it('should remove note with the corresponding id', inject([NoteService], (service: NoteService) => {
      let note1 = new Note({date: '10/03/2017', notes: 'Welcome'});
      let note2 = new Note({date: '10/04/2017', notes: 'hai'});
      service.save(note1);
      service.save(note2);
      expect(service.getAll()).toEqual([note1, note2]);
      service.delete(1);
      expect(service.getAll()).toEqual([note2]);
      service.delete(2);
      expect(service.getAll()).toEqual([]);
    }));

    it('should not removing anything if note with corresponding id is not found', inject([NoteService], (service: NoteService) => {
      let note1 = new Note({date: '10/03/2017', notes: 'Welcome'});
      let note2 = new Note({date: '10/04/2017', notes: 'hai'});
      service.save(note1);
      service.save(note2);
      expect(service.getAll()).toEqual([note1, note2]);
      service.delete(3);
      expect(service.getAll()).toEqual([note1, note2]);
    }));

  });

  describe('#update(id, note1)', () => {

    it('should return note with the corresponding id and updated data', inject([NoteService], (service: NoteService) => {
      let note = new Note({date: '10/03/2017', notes: 'Welcome'});
      service.save(note);
      let updatedNote = service.update(1, {
        date: 'new date'
      });
      expect(updatedNote.date).toEqual('10/03/2017');
    }));

    it('should return null if note is not found', inject([NoteService], (service: NoteService) => {
      let note = new Note({date: '10/03/2017', notes: 'Welcome'});
      service.save(note);
      let updatedNote = service.update(1, {
        date: 'new date'
      });
      expect(updatedNote).toEqual(null);
    }));

  });

 });
