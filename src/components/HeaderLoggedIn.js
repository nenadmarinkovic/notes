import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import ReactTooltip from "react-tooltip";

function HeaderLoggedIn(props) {
  let history = useHistory();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  function handleLogout() {
    appDispatch({ type: "logout" });
    appDispatch({ type: "flashMessage", value: "You logged out." });
    history.push("/");
  }

  function handleSearchIcon(e) {
    e.preventDefault();
    appDispatch({ type: "openSearch" });
  }

  return (
    <div className="flex-row my-3 my-md-0" style={{display: "flex", alignItems: "center"}}>
      {/* <a
        data-for="search"
        data-tip="Search"
        onClick={handleSearchIcon}
        href="#"
        className="text-white mr-2 header-search-icon"
      >
        <i className="fas fa-search"></i>
      </a>
      <ReactTooltip place="bottom" id="search" className="custom-tooltip" />{" "} */}
      <span
        onClick={() => appDispatch({ type: "toggleChat" })}
        data-for="chat"
        data-tip="Chat"
        className={
          "mr-2 header-chat-icon " +
          (appState.unreadChatCount ? "text-danger" : "text-white")
        }
      >
       <span style={{marginRight: "10px"}} >Chat</span>
        {appState.unreadChatCount ? (
          <span className="chat-count-badge text-white" style={{marginRight: "20px"}}>
            {appState.unreadChatCount < 10 ? appState.unreadChatCount : "9+"}
          </span>
        ) : (
          ""
        )}
       
      </span>
      <ReactTooltip place="bottom" id="chat" className="custom-tooltip" />{" "}
      <Link
        data-for="profile"
        data-tip="My Profile"
        to={`/profile/${appState.user.username}`}
        className="mr-2"
      >
        <span style={{textTransform: "capitalize", color: "white", marginRight: "10px"}}>Profile: {appState.user.username}</span>
      </Link>
      <ReactTooltip place="bottom" id="profile" className="custom-tooltip" />{" "}
      <Link className="btn btn-sm btn-create mr-2" to="/create-post">
        Create Draft
      </Link>{" "}
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Log out
      </button>
    </div>
  );
}

export default HeaderLoggedIn;
