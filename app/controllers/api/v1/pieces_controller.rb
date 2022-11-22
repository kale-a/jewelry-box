class Api::V1::PiecesController < ApiController

  def index
    render json: Pieces.all
  end
  
  def show
    render json: Piece.all, serializer: PieceSerializer, include: ['categories.piece']
  end
end