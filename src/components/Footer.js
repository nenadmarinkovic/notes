import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-center small text-muted py-3"
      style={{ height: "40px", background: "rgb(40, 58, 87)" }}
    >
      <p style={{ marginBottom: "0px", paddingBottom: "10px", background: "rgb(40, 58, 87)" }}>
        <Link to="/" className="mx-1">
          Home
        </Link>{" "}
        |{" "}
        <Link className="mx-1" to="/about-us">
          About Notes Café
        </Link>{" "}
      </p>
      <p className="m-0" style={{ paddingBottom: "20px", color: "white", background: "rgb(40, 58, 87)" }}>
        Copyright &copy; 2021{" "}
        <a href="/" style={{color: "white"}}>
          Notes Café
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
