import React from "react";
import { Link } from "react-router-dom";

function Note(props) {
  const note = props.note;
  const date = new Date(note.createdDate);
  const dateFormatted = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  return (
    <Link
      onClick={props.onClick}
      to={`/note/${note._id}`}
      className="no-border list-group-item list-group-item-action"
    >
      
      <strong>{note.title}</strong>{" "}
      <span className="text-muted small">
        {!props.noAuthor && <>by {note.author.username}</>} on {dateFormatted}{" "}
      </span>
    </Link>
  );
}

export default Note;
