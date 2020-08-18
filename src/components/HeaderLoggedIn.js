import React, { useContext } from "react";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

function HeaderLoggedIn() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  function handleLogout() {
    appDispatch({ type: "logout" });
  }
  function handleSearch(e) {
    e.preventDefault();
    appDispatch({ type: "openSearch" });
  }
  return (
    <div className="flex-row my-3 my-md-0">
      <a
        data-tip="Search"
        data-for="search"
        onClick={handleSearch}
        // href="#"
        className="text-white mr-2 header-search-icon"
      >
        <i className="fas fa-search"></i>
      </a>
      <ReactTooltip place="bottom" id="search" className="custom-tooltip" />
      {" "}
      <span
        data-tip="Chat"
        data-for="chat"
        className="mr-2 header-chat-icon text-white"
      >
        <i className="fas fa-comment"></i>
        <ReactTooltip place="bottom" id="chat" className="custom-tooltip" />
        <span className="chat-count-badge text-white"> </span>
      </span>
      {" "}
      <Link to={`/profile/${appState.user.username}`} className="mr-2">
        <img
          data-tip="Profile"
          data-for="profile"
          className="small-header-avatar"
          src={appState.user.avatar}
          alt="Avatar"
        />
      </Link>
      <ReactTooltip place="bottom" id="profile" className="custom-tooltip" />
      {" "}
      <Link className="btn btn-sm btn-success mr-2" to="/create-post">
        Create Post
      </Link>
      {" "}
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
}

export default HeaderLoggedIn;
