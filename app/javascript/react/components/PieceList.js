import React from "react";
import PieceTile from "./PieceTile";

const PieceList = (props) => {

  const pieceTiles = props.pieces.map(piece => {
    return (
      <PieceTile
        key={piece.id}
        id={piece.id}
        piece_photo={piece.piece_photo}
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