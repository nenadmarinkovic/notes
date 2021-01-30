import React, { useState, useContext } from "react";
import Page from "./Page";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function CreateNote(props) {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Axios.post("/create-note", {
        title,
        body,
        token: appState.user.token,
      });
      appDispatch({
        type: "flashMessage",
        value: "Congrats, you created a new note.",
      });
      props.history.push(`/note/${response.data}`);
      console.log("New note was created.");
    } catch (e) {
      console.log("There was a problem.");
    }
  }

  return (
    <Page title="Create New Note">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="note-title" className="text-muted mb-1">
            <small>Title:</small>
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            name="title"
            id="note-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="note-body" className="text-muted mb-1 d-block">
            <small>Text:</small>
          </label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            name="body"
            id="note-body"
            className="body-content tall-textarea form-control"
            type="text"
          ></textarea>
        </div>

        <button className="btn btn-primary">Save New Note</button>
      </form>
    </Page>
  );
}

export default withRouter(CreateNote);
