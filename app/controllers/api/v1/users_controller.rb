class Api::V1::UsersController < ApiController

  def index
    render json: User.all
  end
  
  def show
    render json: User.find(params[:id]), serializer: UserShowSerializer
  end
  
  # def create
  #   piece = Piece.new(piece_params)
  #   piece.save
  #   render json: piece
  #   piece.user = current_user
  # end

  # private

  # def piece_params
  #   params.require(:piece).permit(:jewelry_type, :title, :description, :notes, :piece_photo)
  # end

end