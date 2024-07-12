import React, { useContext } from "react";
import noteContext from "../context/Notes/notecontext";
const NoteItem = (props) => {
  const { note } = props;
  const context = useContext(noteContext)
  const { deleteNote } = context;
  const ondelete =()=>{
       deleteNote(note._id)
        
  }
  const updatenote=()=>{
    props.updatenote(note)

  }
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-trash " onClick={ondelete}></i>
          <i className="fa-solid fa-pen mx-3" onClick={updatenote}></i>
         
          
        </div>
      </div>
    </div>
  );
};
export default NoteItem;
