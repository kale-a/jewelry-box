import React, { useState, useEffect } from 'react'
import UserTile from "./UserTile";
import PieceTile from './PieceTile';

const UserShow = (props) => {

  const pieceTiles = props.pieces.map((piece) => {
    return (
      <PieceTile
        key={piece.id}
        id={piece.id}
        jewelry_type={piece.jewelry_type}
      />
    )
  })

  return (
    <div>
      {pieceTiles}
    </div>
  )
}

export default UserShow