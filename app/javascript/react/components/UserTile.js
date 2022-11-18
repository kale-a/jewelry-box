import React from 'react'
import { Link } from 'react-router-dom'

const UserTile = props => {
  return (
    <div className="grid-x grid-margin-x">
      <Link to={`/users/${props.id}`}>
        <div className="image-box">
          <img src={props.profile_photo} />
          <p>{props.username}</p>
          <p>{props.jewelry_box_name}</p>
        </div>
      </Link>
    </div>
  )
}

export default UserTile