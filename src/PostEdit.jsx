import React, { useState, useEffect } from "react";

// TODO: Create an EditPost component that can edit an individual post

function PostEdit({ userId }) {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${userId}`
      );
      const postFromAPI = await response.json();
      setPost(postFromAPI);
    }
    loadPosts();
  }, [userId]);

  if (post) {
    return (
      <div>
        <h3>Posts for UserId: {post.userId}</h3>
        <h4>{post.title}</h4>
        <h5>{post.body}</h5>
      </div>
    );
  }
}

export default PostEdit;
