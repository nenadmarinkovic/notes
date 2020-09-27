import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";
import StateContext from "../StateContext";
import Post from "./Post";

function ProfilePosts(props) {
  const appState = useContext(StateContext);
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();

    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/posts`, {
          cancelToken: ourRequest.token,
        });
        setPosts(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("There was a problem.");
      }
    }
    fetchPosts();
    return () => {
      ourRequest.cancel();
    };
  }, [username]);

  if (isLoading) return <LoadingDotsIcon />;

  return (
    <div className="list-group">
      {posts.length > 0 &&
        posts.map((post) => {
          return <Post noAuthor={true} post={post} key={post._id} />;
        })}
      {posts.length === 0 && appState.user.username === username && (
        <p className="lead text-muted text-center">
          You haven&rsquo;t created any posts yet;{" "}
          <Link to="/create-post">create one now!</Link>
        </p>
      )}
      {posts.length === 0 && appState.user.username !== username && (
        <p className="lead text-muted text-center">
          {username} hasn&rsquo;t created any posts yet.
        </p>
      )}
    </div>
  );
}

export default ProfilePosts;
