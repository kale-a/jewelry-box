import React, {useState, useEffect} from "react";
import CollectionShow from "./CollectionShow";

const CollectionShowContainer = (props) => {
  
  const collection = props.pieces.map(piece => {
    return (
      <CollectionShow
        key={piece.id}
        id={piece.id}
        jewelry_type={piece.jewelry_type}
        title={piece.title}
        piece_photo={piece.piece_photo}
        categories={piece.categories}
      />
    )
  }) 
  return (
    <div>
      {collection}
    </div>
  )
}

export default CollectionShowContainer