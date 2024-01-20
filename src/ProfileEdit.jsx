import React, { useState, useEffect } from "react";

/* 
In this section, you will create a component to edit a user profile. 
To do this, you will make an API call to fetch a user profile once, when the 
component is first rendered.
*/

function ProfileEdit() {
    const [user, setUser] = useState({});
    console.log("render", user)

    const changeHandler = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
      }

      const submitHandler = async (event) => {
        event.preventDefault();
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${user.id}`,
          {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
              "Content-type": "application/json;charset=UTF-8"
            }
          }
        );
        const savedData = await response.json();
        console.log("Saved user!", savedData);
      };

    useEffect(() => {
      console.log("useEffect")
      async function loadUsers() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const userFromAPI = await response.json();
        console.log("setUser", userFromAPI)
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
              name="wrongusername"
              type="text"
              required={true}
              value={user.username}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required={true}
              value={user.email}
              onChange={changeHandler}
            />
          </div>
        </form>
      );
    }
    return "Loading...";
  }

  export default ProfileEdit;