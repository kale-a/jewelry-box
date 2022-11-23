import React, { useState, useEffect } from "react";
import UserShow from "./UserShow";
import CollectionShowContainer from "./CollectionShowContainer"

const UserShowContainer = (props) => {
  const [user, setUser] = useState({
    pieces: []
  })

  const userId = props.match.params.id

  const getUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${userId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setUser(responseBody.user)

    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }
  
  useEffect(() => {
    getUser()
  }, [])

  
  return (
    <div>
      <UserShow
        key={user.id}
        id={user.id}
        profile_photo={user.profile_photo}
        username={user.username}
        jewelry_box_name={user.jewelry_box_name}
      />

    <CollectionShowContainer 
      pieces={user.pieces} 
    />

    </div>
    )
  }

export default UserShowContainer