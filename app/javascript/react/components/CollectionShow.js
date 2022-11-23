import React from "react";
import CollectionList from "./CollectionList";

const CollectionShow = (props) => {

  const categories = props.categories.map(category => {
    return (
      <CollectionList 
        key={category.id}
        id={category.id}
        material={category.material}
        size={category.size}
        theme={category.theme}
        backing={category.backing}
      />
    )
  })
  return (
    <div>
      <img src={props.piece_photo}/> <br />
      <i>{props.title}</i> <br />
      Type: {props.jewelry_type}
      {categories}
    </div>
  )
}

export default CollectionShow