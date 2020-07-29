import React, {useState} from "react";
import Link from "next/link";
import LogIn from "./LogIn";
import HeaderLoggedIn from "./HeaderLoggedIn";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <header className="header-bar bg-dark mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link href="/">
            <a className="text-white">Draft Network</a>
          </Link>{" "}
        </h4>
        
        { loggedIn ? <HeaderLoggedIn setLoggedIn={setLoggedIn} /> : <LogIn setLoggedIn={setLoggedIn}  />  }
        
      </div>
    </header>
  );
}

export default Header;
