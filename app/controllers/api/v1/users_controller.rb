class Api::V1::UsersController < ApiController

  def index
    render json: User.all
    # maybe iterate over users to get jewelry info?
  end
  
  def show
    render json: User.all
  end
  

end