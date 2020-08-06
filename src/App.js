import React, { useEffect } from "react";
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
import Profile from "./components/Profile";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import { useImmerReducer } from "use-immer";

function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("draftToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("draftToken"),
      username: localStorage.getItem("draftUsername"),
      avatar: localStorage.getItem("draftAvatar"),
    },
  };

  function draftReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        draft.user = action.data;
        return;
      case "logout":
        draft.loggedIn = false;
        return;
      case "flashMessage":
        draft.flashMessages.push(action.value);
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(draftReducer, initialState);

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("draftToken", state.user.token);
      localStorage.setItem("draftUsername", state.user.username);
      localStorage.setItem("draftAvatar", state.user.avatar);
    } else {
      localStorage.removeItem("draftToken");
      localStorage.removeItem("draftUsername");
      localStorage.removeItem("draftAvatar");
    }
  }, [state.loggedIn]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />
          <Header />
          <Switch>
            <Route path="/" exact>
              {state.loggedIn ? <Home /> : <HomeGuest />}
            </Route>
            <Route path="/profile/:username" exact>
             <Profile/>
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
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
