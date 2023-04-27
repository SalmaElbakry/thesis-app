import React from "react";
import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";

export const Posts = () => {
  const { isLoading, error, data } = useQuery("posts", () =>
    // using axios to fetch
    makeRequest.get("/posts").then((res) => {
      return res.data;
    })
  );
  console.log(data);

  return (
    <div className="posts">
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
