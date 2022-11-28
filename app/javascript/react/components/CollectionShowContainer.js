import React, {useState, useEffect} from "react";
import CollectionShow from "./CollectionShow";

const CollectionShowContainer = (props) => {
  
  const collection = props.pieces.map(piece => {
    return (
      <CollectionShow
        key={piece.id}
        id={piece.id}
        jewelry_type={piece.jewelry_type}
        piece_photo={piece.piece_photo}
        categories={piece.categories}
      />
    )
  }) 
  return (
    <div className="grid-x grid-margin-x">
      {collection}
    </div>
  )
}

export default CollectionShowContainer