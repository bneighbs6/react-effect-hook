import React, { useState } from "react";
import "../src/App.css";
import ProfileEdit from "./ProfileEdit";
import PostEdit from "./PostEdit";
import DisplayPhoto from "./DisplayPhoto";

function App() {
  const [userId, setUserID] = useState(1);
  const [postId, setPostId] = useState(1);
  const [photoId, setPhotoId] = useState(1);

  const userIds = [1, 2, 3, 4];
  const postAndPhotoIds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100,
  ];

  return (
    <div className="App">
      {userIds.map((id) => (
        <button key={id} onClick={() => setUserID(id)}>
          User ID {id}
        </button>
      ))}
      <h2>User ID {userId}</h2>
      <ProfileEdit userID={userId} />
      {postAndPhotoIds.map((id) => (
        <button key={id} onClick={() => setPostId(id)}>
          Post ID {id}
        </button>
      ))}
      <h3>Post Id {postId}</h3>
      <PostEdit postId={postId} />
      {postAndPhotoIds.map((id) => (
        <button key={id} onClick={() => setPhotoId(id)}>
          Photo ID {id}
        </button>
      ))}
      <h3>Photo Id {photoId}</h3>
      <DisplayPhoto photoId={photoId} />
    </div>
  );
}

export default App;
