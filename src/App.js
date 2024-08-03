import React, { useState } from "react";
import "../src/App.css";
import ProfileEdit from "./ProfileEdit";
import PostEdit from "./PostEdit";
import { click } from "@testing-library/user-event/dist/click";

function App() {
  const [userId, setUserID] = useState(1);
  const [postId, setPostId] = useState(1);

  const userIds = [1, 2, 3, 4];
  const postIds = [1, 2, 3, 4];

  return (
    <div className="App">
      {userIds.map((id) => (
        <button key={id} onClick={() => setUserID(id)}>
          User ID {id}
        </button>
      ))}
      <h2>User ID {userId}</h2>
      <ProfileEdit userID={userId} />
      {postIds.map((clickedId) => (
        <button key={clickedId} onClick={() => setPostId(clickedId)}>
          Post ID {clickedId}
        </button>
      ))}
      <h2>Post Id {postId}</h2>
      <PostEdit userId={userId} postId={postId} />
    </div>
  );
}

export default App;
