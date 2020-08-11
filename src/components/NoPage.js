import React from "react";
import { Link } from "react-router-dom";
import Page from "./Page";

function NoPage() {
  return (
    <div>
      <Page title="Not Found">
        <div className="text-center">
          <h1>Page not found.</h1>
          Visit <Link to="/">homepage.</Link>
        </div>
      </Page>
    </div>
  );
}

export default NoPage;
