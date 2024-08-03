import React, { useState, useEffect } from "react";

function PostEdit({ postId }) {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const postFromAPI = await response.json();
      setPost(postFromAPI);
    }
    loadPosts();
  }, [postId]);

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: [e.target.value] })
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      }
    );
    const savedData = await response.json();
    console.log("Post editted and saved", savedData);
  };

  if (post) {
    return (
      <form name="postEdit" onSubmit={submitHandler}>
        <fieldset>
          <legend>Post ID: {postId}</legend>
          <div>
            <label htmlFor="title">Post Title: </label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={changeHandler}
              value={post.title}
            />
          </div>
          <div>
            <label htmlFor="body">Post Body: </label>
            <input
              id="body"
              name="body"
              type="text"
              onChange={changeHandler}
              value={post.body}
            />
          </div>
          <button type="submit">Save Post</button>
        </fieldset>
      </form>
    );
  }
}

export default PostEdit;
