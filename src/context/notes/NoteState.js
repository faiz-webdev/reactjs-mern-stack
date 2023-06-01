import NoteContext from "./noteContext";

const NoteState = (props) => {
  const state = {
    "name": "Test",
    "class": "10",
  };

  return (
    <NoteContext.Provider value={state}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
