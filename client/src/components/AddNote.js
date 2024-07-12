import React, { useContext, useState } from "react";

import noteContext from "../context/Notes/notecontext";
const AddNote = () => {
  const context = useContext(noteContext);
  const { addnote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handlechange = (event) => {
    const { name, value } = event.target;

    setNote({ ...note, [name]: value });
  };
  const handleclick = (e) => {
    addnote(note.title, note.description, note.tag);
  };

  return (
    <div className="Container">
      <h2>Add a note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            onChange={handlechange}
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            value={note.title}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            onChange={handlechange}
            type="text"
            className="form-control"
            id="description"
            name="description"
            value ={note.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            tag
          </label>
          <input
            onChange={handlechange}
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
          />
        </div>

        <button onClick={handleclick} type="submit" className="btn btn-primary">
          Add Note
        </button>
      </form>
    </div>
  );
};
export default AddNote;
