import React from "react";
import PieceTile from "./PieceTile";
import UserTile from "./UserTile";

const UserShow = (props) => {
  
  const userTiles = props.users.map(user => {
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

  const pieceTiles = props.pieces.map(piece => {
    return (
      <PieceTile
        key={piece.id}
        id={piece.id}
        piece_photo={piece.piece_photo}
      />
    )
  })

  return (
    <div>
      {userTiles}
      {pieceTiles}
    </div>
  )
}

export default UserShow