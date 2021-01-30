import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";
import StateContext from "../StateContext";
import Note from "./Note";

function ProfileNotes(props) {
  const appState = useContext(StateContext);
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();

    async function fetchNotes() {
      try {
        const response = await Axios.get(`/profile/${username}/notes`, {
          cancelToken: ourRequest.token,
        });
        setNotes(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("There was a problem.");
      }
    }
    fetchNotes();
    return () => {
      ourRequest.cancel();
    };
  }, [username]);

  if (isLoading) return <LoadingDotsIcon />;

  return (
    <div className="list-group">
      {notes.length > 0 &&
        notes.map((note) => {
          return <Note noAuthor={true} note={note} key={note._id} />;
        })}
      {notes.length === 0 && appState.user.username === username && (
        <p className="lead text-muted text-center">
          You haven&rsquo;t created any notes yet;{" "}
          <Link to="/create-note">create one now!</Link>
        </p>
      )}
      {notes.length === 0 && appState.user.username !== username && (
        <p className="lead text-muted text-center">
          {username} hasn&rsquo;t created any notes yet.
        </p>
      )}
    </div>
  );
}

export default ProfileNotes;
