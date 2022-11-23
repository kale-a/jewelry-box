import React from 'react'
import { Link } from 'react-router-dom'
import PieceList from './PieceList'

const UsersTiles = (props) => {

  return (
    <div className="callout">
      <div className="grid-x grid-margin-x">
      <Link to={`/users/${props.id}`}>
        <div className="index-user-photo">
          <img src={props.profile_photo} />
        </div>
        <p>{props.username}</p>
        <p>{props.jewelry_box_name}</p>
        <div>
          <PieceList
            pieces={props.pieces} 
          />
        </div>
      </Link>
    </div>
  </div>
  )
}

export default UsersTiles