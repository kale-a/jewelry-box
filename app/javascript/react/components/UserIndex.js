import React, { useState, useEffect } from 'react'
import UserTile from './UserTile'
import PieceTile from './PieceTile'

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

  const userTiles = users.map(user => {
    return (
      <UserTile
        key={user.id}
        id={user.id}
        profile_photo={user.profile_photo}
        username={user.username}
        jewelry_box_name={user.jewelry_box_name}
      />
    )
  })
  // const pieceTiles = users.map(piece => {
  //   return (
  //     <PieceTile
  //       key={users.pieces.id}
  //       id={users.piece.id}
  //       piece_photo={users.pieces.piece_photo}
  //     />
  //   )
  // })

  return (
    <div className="margin-padding">
      <h4 className="page-font">Get some inspiration!</h4>
      {userTiles}
      {/* {pieceTiles} */}
      
    </div>
  )
}

export default UserIndex