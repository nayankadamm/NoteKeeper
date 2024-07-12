import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/Notes/notecontext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
const Notes = () => {
  const navigate = useNavigate()
  const context = useContext(noteContext);
  const { notes, getnotes,editnotes } = context;
  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(() => {
   
    if( localStorage.getItem('token'))
    {
      getnotes();
    }
    else{
      navigate("/login")

    }
   
    //eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  
  const updatenote = (currentNote) => {
    ref.current.click();
    setNote({ id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  };

  const handlechange = (e) => {
    const { name, value } = e.target
    setNote({ ...note, [name]: value })
  }
  const handleclick = (e) => {
    editnotes(note.id,note.etitle,note.edescription,note.etag)
  window.location.reload(true)
   }

  return (
    <>
      <div className="row my-3">
        <AddNote />
        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Launch static backdrop modal
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Edit Note
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Title
                    </label>
                    <input
                      onChange={handlechange}
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      aria-describedby="emailHelp"
                      value={note.etitle}


                    />
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Description
                    </label>
                    <input
                      onChange={handlechange}
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      value={note.edescription}

                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      tag
                    </label>
                    <input
                      onChange={handlechange}
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      value={note.etag}

                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button  onClick={handleclick} type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <h2>Your notes</h2>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updatenote={updatenote} note={note} />
          );
        })}
      </div>
    </>
  );
};
export default Notes;
