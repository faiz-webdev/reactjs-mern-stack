import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //get all notes
  // add note
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ODZjMjkwYWE4YWIxN2Y4ZmY3MTUxIn0sImlhdCI6MTY4NTYxMzYwOX0.4IXuUtRXgrLGTOVhHnW_MS3rPyTnMJr_T_9OQrs0tRs",
      },
    });
    const parsedData = await response.json();
    console.log(parsedData);
    setNotes(parsedData);
  };

  // add note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/2`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ODZjMjkwYWE4YWIxN2Y4ZmY3MTUxIn0sImlhdCI6MTY4NTYxMzYwOX0.4IXuUtRXgrLGTOVhHnW_MS3rPyTnMJr_T_9OQrs0tRs",
      },
      body: JSON.stringify({ title, description, tag }),
    });

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
  const deleteNote = (id) => {
    console.log("deleting notes", id);
    const newNotes = notes.filter((note) => note._id != id);
    setNotes(newNotes);
  };

  // edit notes
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ODZjMjkwYWE4YWIxN2Y4ZmY3MTUxIn0sImlhdCI6MTY4NTYxMzYwOX0.4IXuUtRXgrLGTOVhHnW_MS3rPyTnMJr_T_9OQrs0tRs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
