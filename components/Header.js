import React, { useState, useEffect } from "react";
import Link from "next/link";
import HeaderLogout from "./HeaderLogout";
import HeaderLogin from "./HeaderLogin";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn);

  useEffect(() => {
    if (Boolean(localStorage.getItem("draftToken"))) {
      setLoggedIn(true);
    }
  });
  return (
    <header className="header-bar bg-dark mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link href="/">
            <a className="text-white">Draft Network</a>
          </Link>{" "}
        </h4>

        {loggedIn ? (
          <HeaderLogin setLoggedIn={setLoggedIn} />
        ) : (
          <HeaderLogout setLoggedIn={setLoggedIn} />
        )}
      </div>
    </header>
  );
}

export default Header;
