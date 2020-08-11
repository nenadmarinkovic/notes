import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import ReactTooltip from "react-tooltip"
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import Page from "./Page";
import LoadingDots from "./LoadingDots";

function ViewSinglePost() {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();
    async function fetchPosts() {
      try {
        const response = await Axios.get(`http://localhost:7575/post/${id}`, {
          cancelToken: ourRequest.token,
        });
        setPost(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("There was a problem or the request was cancelled...");
      }
    }
    fetchPosts();
    return () => {
      ourRequest.cancel();
    };
  }, []);

  if (isLoading) {
    return (
      <Page>
        <LoadingDots />
      </Page>
    );
  }

  const date = new Date(post.createdDate);
  const dateFormated = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  return (
    <Page title={post.title}>
      <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        <span className="pt-2">
        
          <Link to={`/post/${post._id}/edit`} data-tip="Edit" data-for="edit" className="text-primary mr-2">
            <i className="fas fa-edit"></i>
          </Link>
          <ReactTooltip id="edit" className="custom-tooltip" />
        {" "}
          <a data-tip="Delete" data-for="delete" className="delete-post-button text-danger">
            <i className="fas fa-trash"></i>
          </a>
          <ReactTooltip id="delete" className="custom-tooltip" />
        </span>
      </div>

      <p className="text-muted small mb-4">
        <Link to={`/profile/${post.author.username}`}>
          <img
            className="avatar-tiny"
            src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"
          />
        </Link>
        Posted by{" "}
        <Link to={`/profile/${post.author.username}`}>
          {post.author.username}
        </Link>{" "}
        on {dateFormated}
      </p>

      <div className="body-content">
        <ReactMarkdown
          source={post.body}
          allowedTypes={[
            "paragraph",
            "strong",
            "italic",
            "emphasis",
            "text",
            "heading",
            "listItem",
            "list",
          ]}
        />
      </div>
    </Page>
  );
}

export default ViewSinglePost;
