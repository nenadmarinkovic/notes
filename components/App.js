import React from "react";
import Header from "../components/Header";
import Registration from "../components/Registration";
import Footer from "../components/Footer";
import { GlobalStyles } from "../styles/global";

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Header />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
