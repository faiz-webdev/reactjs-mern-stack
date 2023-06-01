import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: 1,
      title: "Note title",
      description: "Note description",
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  // add note
  const addNote = (title, description, tag) => {
    console.log("adding a new note");

    const note = {
      _id: 2,
      title: title,
      description: description,
      tag: tag,
    };
    setNotes(notes.concat(note));
  };

  //delete notes
  const deleteNote = (note) => {};

  // edit notes
  const editNote = (note) => {};

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
