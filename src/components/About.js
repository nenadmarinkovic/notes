import React from "react";
import Page from "./Page";

function About() {
  return (
    <Page title="About Us">
      <h2>About Notes Café</h2>
      <p
        className="lead text-muted"
        style={{ marginTop: "20px", lineHeight: "1.8" }}
      >
        Notes Café is a small, private not-for-profit social network, but open
        to all who want to use it or contribute to its growth.
      </p>
      <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
        Users can add notes, follow other users, share knowledge and resources.
        There are no distractions, trolls, marketing campaigns, political
        propaganda, bots, not even your aunt. Just a group of friends who share
        ideas and interesting links. The creator of the project is{" "}
        <a href="https://nenadmarinkovic.com" target="_blank" rel="noreferrer">
          Nenad Marinković
        </a>
        .
      </p>
      <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
        You will be welcomed here! Ready to join?
      </p>
    </Page>
  );
}

export default About;
