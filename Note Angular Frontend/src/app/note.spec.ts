import {Note} from './note';

describe('Note', () => {
  it('should create an instance', () => {
    expect(new Note()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let note = new Note({
      date: '10/03/2017',
      notes: 'Welcome'
    });
    expect(note.date).toEqual('10/03/2017');
    expect(note.notes).toEqual('Welcome');
  });
});
