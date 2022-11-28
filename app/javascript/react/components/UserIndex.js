import React, { useState, useEffect } from 'react'
import UsersTiles from './UsersTiles'

const UserIndex = (props) => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const response = await fetch("/api/v1/users")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setUsers(responseBody.users)

    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  const userTiles = users.map(users => {
    return (
      <UsersTiles
        key={users.id}
        id={users.id}
        profile_photo={users.profile_photo}
        username={users.username}
        jewelry_box_name={users.jewelry_box_name}
        pieces={users.pieces}
      />
    )
  })

  return (
    <div className="margin-padding">
      <h4 className="page-font">Get some inspiration!</h4>
        <div className="grid-x grid-margin-x">
        {userTiles}
        </div>
  </div>
  )
}

export default UserIndex