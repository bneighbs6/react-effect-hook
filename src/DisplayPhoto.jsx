import React, { useState, useEffect } from "react";

function DisplayPhoto({ photoId }) {
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    async function loadPhotos() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${photoId}`
      );
      const photosFromAPI = await response.json();
      setPhoto(photosFromAPI);
    }
    loadPhotos();
  }, [photoId]);

  if (photo) {
    return (
      <>
        <div>
          <img src={photo.url} />
        </div>
        <div>
          <a href={photo.url}>{photo.url}</a>
        </div>
      </>
    );
  } else {
    return "Loading...";
  }
}

export default DisplayPhoto;
