import React from 'react'

const PieceTile = (props) => {
  return (
    <div className="index-piece-photo">
      <img src={props.piece_photo} />
    </div>
  )
}

export default PieceTile