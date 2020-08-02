import React, { useState, useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";
import CreatePost from "./components/CreatePost";
import ViewSinglePost from "./components/ViewSinglePost";
import FlashMessages from "./components/FlashMessages";
import ExampleContext from "./ExampleContent";

function App() {
  
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("draftToken"))
  );
  const [flashMessages, setFlashMessages] = useState([]);

  function addFlashMessage(msg) {
    setFlashMessages((prev) => prev.concat(msg));
  }

  return (
    <ExampleContext.Provider value={{ addFlashMessage, setLoggedIn}}>
      <BrowserRouter>
        <FlashMessages messages={flashMessages} />
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route path="/" exact>
            {loggedIn ? <Home /> : <HomeGuest />}
          </Route>
          <Route path="/post/:id">
            <ViewSinglePost />
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ExampleContext.Provider>
  );
}

export default App;
