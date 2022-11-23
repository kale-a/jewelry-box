import React from "react";
import PieceTile from "./PieceTile";

const PieceList = (props) => {

  const pieceTiles = props.pieces.map(piece => {
    return (
      <PieceTile
        key={piece.id}
        id={piece.id}
        jewelry_type={piece.jewelry_type}
        title={piece.title}
        piece_photo={piece.piece_photo}
        description={piece.description}
        notes={piece.notes}
      />
    )
  })
  
  return (
    <div>
      {pieceTiles}
    </div>
  )
}
export default PieceList