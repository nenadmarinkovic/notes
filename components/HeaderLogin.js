import React from "react";

function HeaderLogin(props) {
  function handleLogout() {
    props.setLoggedIn(false)
    localStorage.removeItem("draftToken")
    localStorage.removeItem("draftAvatar")
    localStorage.removeItem("draftUsername")
  }
  return (
    <div>
      <div className="flex-row my-3 my-md-0">
        <a href="#" className="text-white mr-2 header-search-icon">
          <i className="fas fa-search"></i>
        </a>
        <span className="mr-2 header-chat-icon text-white">
          <i className="fas fa-comment"></i>
          <span className="chat-count-badge text-white"> </span>
        </span>
        <a href="#" className="mr-2">
          <img
            className="small-header-avatar"
             src={localStorage.getItem('draftAvatar')}
          />
        </a>
        <a className="btn btn-sm btn-success mr-2" href="/create-post">
          Create Post
        </a>
        <button onClick={handleLogout} className="btn btn-sm btn-secondary">Sign Out</button>
      </div>
    </div>
  );
}

export default HeaderLogin;
