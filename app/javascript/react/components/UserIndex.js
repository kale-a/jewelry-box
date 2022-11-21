import React, { useState, useEffect } from 'react'
import UserTile from './UserTile'
import PieceTile from './PieceTile'

const UserIndex = (props) => {
  const [users, setUsers] = useState([])
  const [pieces, setPieces] = useState([])

  const getUsers = async () => {
    try {
      const response = await fetch("/api/v1/users")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBodyUsers = await response.json()
      debugger
      setUsers(responseBodyUsers.users)

    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const userID = props.match.params.id

  const getPieces = async () => {
    try {
      const response = await fetch(`/api/v1/users/${userID}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBodyPieces = await response.json()
      debugger
      setPieces(responseBodyPieces.pieces)

    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getUsers()
    getPieces()
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
  const pieceTiles = pieces.map(piece => {
    return (
      <PieceTile
        key={pieces.id}
        id={piece.id}
        piece_photo={pieces.piece_photo}
        piece_title={pieces.title}
      />
    )
  })

  return (
    <div className="margin-padding">
      <h4 className="page-font">Get some inspiration!</h4>
      {userTiles}
      {pieceTiles}
      
    </div>
  )
}

export default UserIndex