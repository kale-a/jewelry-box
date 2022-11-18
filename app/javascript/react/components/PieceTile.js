import React from 'react'

const PieceTile = props => {
  return (
    <div className="grid-x grid-margin-x">
        <div className="image-box">
          <p>{props.type}</p>
          <img src={props.piece_photo} />
          <p>{props.description}</p>
          <p>{props.notes}</p>
        </div>
    </div>
  )
}

export default PieceTile