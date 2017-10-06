package com.aruna;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

import java.util.Arrays;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(MockitoJUnitRunner.class)
public class NoteControllerTest {

	private static final int NOTE_ID = 1;
	private static final Note EXISTING_NOTE = new NoteBuilder().id(NOTE_ID).date("28.09.2017").notes("Micky").build();
	private static final Note ANOTHER_NOTE = new NoteBuilder().id(2).date("28.09.2017").notes("Micky").build();
	private static final Note NEW_NOTE = new NoteBuilder().date("28.09.2017").notes("Micky").build();

	@InjectMocks
	private NoteController noteController;
	@Mock
	private NoteRepository repo;

	@Test
	public void whenCreatingNoteItShouldReturnTheSavedNote() {
		given(repo.saveAndFlush(NEW_NOTE)).willReturn((EXISTING_NOTE));
		assertThat(noterController.save((NEW_NOTE))).isSameAs(EXISTING_NOTE);
	}

	@Test
	public void whenUpdatingNoteItShouldReturnTheSavedNote() {
		// given(repo.getOne(NOTE_ID)).willReturn(EXISTING_NOTE);
		given(repo.saveAndFlush(EXISTING_NOTE)).willReturn(EXISTING_NOTE);
		assertThat(noteController.update(NOTE_ID, EXISTING_NOTE)).isSameAs(EXISTING_NOTE);
	}

	@Test
	public void whenReadingdingNoteItShouldReturnAllNotes() {
		given(repo.findAll()).willReturn(Arrays.asList(EXISTING_NOTE, ANOTHER_NOTE));
		assertThat(noteController.getAll()).containsOnly(EXISTING_NOTE, ANOTHER_NOTE);
	}

	@Test
	public void whenDeletingANoteItShouldUseTheRepository() {
		noteController.delete(NOTE_ID);
		verify(repo).delete(NOTE_ID);
	}

}