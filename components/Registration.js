import React, { useState } from "react";
import Axios from "axios";

function Registration() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await Axios.post("http://localhost:7575/register", {
        username,
        email,
        password
      });
      console.log("user successfuly created");
    } catch (e) {
      console.log("there was an error");
    }
  }

  return (
    <div className="container py-md-5">
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Publish notes in seconds</h1>
          <p className="lead text-muted">
            Are you sick of short tweets and impersonal &ldquo;shared&rdquo;
            posts that are reminiscent of the late 90&rsquo;s email forwards? We
            believe getting back to actually writing is the key to enjoying the
            internet again.
          </p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                id="username-register"
                name="username"
                className="form-control"
                type="text"
                placeholder="Pick a username"
                autocomplete="off"
              />
            </div>
            <div className="form-group">
              <label for="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email-register"
                name="email"
                className="form-control"
                type="text"
                placeholder="you@example.com"
                autocomplete="off"
              />
            </div>
            <div className="form-group">
              <label for="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password-register"
                name="password"
                className="form-control"
                type="password"
                placeholder="Create a password"
              />
            </div>
            <button
              type="submit"
              className="py-3 mt-4 btn btn-lg btn-success btn-block"
            >
              Sign up for Draft Network
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
