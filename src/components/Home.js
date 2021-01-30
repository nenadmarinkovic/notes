import React, { useEffect, useContext } from "react";
import Page from "./Page";
import StateContext from "../StateContext";
import { useImmer } from "use-immer";
import LoadingDotsIcon from "./LoadingDotsIcon";
import Axios from "axios";
import Note from "./Note";

function Home() {
  const appState = useContext(StateContext);
  const [state, setState] = useImmer({
    isLoading: true,
    feed: [],
  });

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();

    async function fetchData() {
      try {
        const response = await Axios.post(
          "/getHomeFeed",
          { token: appState.user.token },
          { cancelToken: ourRequest.token }
        );
        setState((draft) => {
          draft.isLoading = false;
          draft.feed = response.data;
        });
      } catch (e) {
        console.log("There was a problem.");
      }
    }
    fetchData();
    return () => {
      ourRequest.cancel();
    };
  }, []);

  if (state.isLoading) {
    return <LoadingDotsIcon />;
  }

  return (
    <Page title="Your Feed">
      {state.feed.length > 0 && (
        <>
          <h2 className="lb-text text-center mb-4">
            The Latest From Those You Follow
          </h2>
          <div
            className="list-group"
            style={{ minHeight: "calc(100vh - 200px)" }}
          >
            {state.feed.map((note) => {
              return <Note note={note} key={note._id} />;
            })}
          </div>
        </>
      )}
      {state.feed.length === 0 && (
        <>
          <h2 className="text-center">
            Hello <strong>{appState.user.username}</strong>, your feed is empty.
          </h2>
          <p className="lead text-muted text-center" style={{fontSize: "17px", lineHeight: "1.8", marginTop: "30px"}}>
            Your feed displays the latest notes from the people you follow. If
            you don&rsquo;t have any friends to follow that&rsquo;s okay! You
            can follow the Great Master Mind of this network{" "}
            <a href="https://notes.cafe/profile/nenad">Nenad</a>, Grand Comissar{" "}
            <a href="https://notes.cafe/profile/lju">Ljuba</a>, or even Mighty
            Chef <a href="https://notes.cafe/profile/aleks">Aleks</a>.
          </p>
        </>
      )}
    </Page>
  );
}

export default Home;
