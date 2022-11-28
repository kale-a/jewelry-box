import React from 'react'
import { Link } from 'react-router-dom'
import PieceList from './PieceList'

const UsersTiles = (props) => {

  return (
    <div className="grid-x grid-margin-x callout">
      <div className="index-box-header">
        <Link to={`/users/${props.id}`}>
          <div className="index-user-photo">
            <img src={props.profile_photo} />
          </div>
          <div>
            {props.username}
          </div>
          <div>
            {props.jewelry_box_name}
          </div>
        </Link>
      </div>
      <PieceList
        pieces={props.pieces} 
      />
      </div>
  )
}

export default UsersTiles