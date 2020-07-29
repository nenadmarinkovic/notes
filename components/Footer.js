import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className="border-top text-center small text-muted py-3"
      style={{ position: "fixed", bottom: 0, width: "100%" }}
    >
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/terms">
          <a>Terms</a>
        </Link>
      </p>
      <p className="m-0">
        Copyright &copy; 2020{" "}
        <a href="/" className="text-muted">
          Draft Network
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
