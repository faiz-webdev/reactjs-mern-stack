import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(noteContext);
  const { notes, setNotes, addNote } = context;
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h1>Your notes</h1>
        {notes.map((note) => {
          return <Noteitem note={note} key={note._id} />;
        })}
      </div>
    </>
  );
}

export default Notes;
