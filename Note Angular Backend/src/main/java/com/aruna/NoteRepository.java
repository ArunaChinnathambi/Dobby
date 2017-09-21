package com.aruna;

import com.aruna.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository("noteRepository")
public interface NoteRepository extends JpaRepository< Note ,Long > {

}
