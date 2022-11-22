class Api::V1::UsersController < ApiController

  def index
    render json: User.all
    # render json: Piece.all
    # render json: Category.all
  end
  
  def show
    render json: User.find(params[:id]), serializer: UserShowSerializer
    # render json: Pieces.find(params[:id]), serializer: PiecesSerializer, include: ['categories.pieces']
  end
end