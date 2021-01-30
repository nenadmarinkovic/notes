import React from "react";
import Page from "./Page";

function About() {
  return (
    <Page title="About Us">
      <h2>About Notes Café</h2>
      <p className="lead text-muted" style={{ marginTop: "20px", lineHeight: "1.8" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        dolorum labore quisquam vel id dicta fuga! Ducimus, quo. Dolore commodi
        aliquid error veritatis consequuntur, excepturi cumque fuga eum incidunt
        doloremque?
      </p>
      <p style={{ marginTop: "20px", lineHeight: "1.8"}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At qui enim
        rem totam voluptatum. Aut saepe temporibus, facilis ex a iste expedita
        minima dolorum dicta doloribus libero aliquid, quae maxime? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Fugiat suscipit beatae eum,
        est soluta ducimus ratione et impedit sapiente, nihil, atque dignissimos
        adipisci? Totam atque officia quis voluptates sed veniam?
      </p>
      <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        voluptates quisquam possimus tenetur, dicta enim rerum quis, quaerat id
        nobis provident quo dolorum sapiente temporibus facere non repellendus
        consequatur cupiditate!
      </p>
    </Page>
  );
}

export default About;
