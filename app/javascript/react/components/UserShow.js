import React from 'react'

const UserShow = (props) => {

  return (
    <div className="grid-x grid-margin-x">
      <div className="index-user-photo">
        <img src={props.profile_photo} />
      </div>
      <p>{props.username}</p>
      <p>{props.jewelry_box_name}</p>
    </div>
  )
}

export default UserShow