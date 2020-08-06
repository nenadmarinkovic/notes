import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";

function ProfilePosts() {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await Axios.get(
          `http://localhost:7575/profile/${username}/posts`
        );
        setPosts(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("There was a problem...");
      }
    }
    fetchPosts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(posts);
  return (
    <div>
      <div className="list-group">
        {posts.map((post) => {
            const date = new Date(post.createdDate)
            const dateFormated = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
          return (
            <Link
              key={post._id}
              to={`/post/${post._id}`}
              className="list-group-item list-group-item-action"
            >
              <img
                className="avatar-tiny"
                src={post.author.avatar}
              />{" "}
              <strong>{post.title}</strong>
          <span className="text-muted small">{" "} {dateFormated} </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProfilePosts;
