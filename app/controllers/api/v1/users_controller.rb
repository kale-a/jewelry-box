class Api::V1::UsersController < ApiController

  def index
    render json: User.all
  end
  
  def show
    render json: User.all

  end
end