import React, { useState, useEffect } from "react";

/* 
In this section, you will create a component to edit a user profile. 
To do this, you will make an API call to fetch a user profile once, when the 
component is first rendered.
*/

function ProfileEdit() {
    console.log("Started...")
    const [user, setUser] = useState({});
  
    useEffect(() => {
      async function loadUsers() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const userFromAPI = await response.json();
        setUser(userFromAPI);
      }
      loadUsers();
    }, []); // Passing [] so that it only runs the effect once
  
    if (user.id) {
      // `user.id` is truthy after the API call returns
      return (
        <form name="profileEdit">
          <div>
            <label htmlFor="username">User Name:</label>
            <input
              id="username"
              name="username"
              type="text"
              value={user.username}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" value={user.email} />
          </div>
        </form>
      );
    }
    return "Loading...";
  }

  export default ProfileEdit;