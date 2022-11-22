import React, { useState, useEffect } from "react";
import UserShow from "./UserShow";

const UserShowContainer = (props) => {
  const [user, setUser] = useState([]);
  const [pieces, setPieces] = useState([]);

  const userId = props.match.params.id;

  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${userId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setUser(responseBody.user);
      setPieces(responseBody.pieces);

    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };
  
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserShow
      key={user.id}
      id={user.id}
      username={user.username}
      profile_photo={user.profile_photo}
      pieces={pieces}
      setPieces={setPieces}
    />
  );
};

export default UserShowContainer;
