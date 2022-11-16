class Api::V1::ProfilesController < ApiController

  def index
    render json: Jewelry.all
  end
  
  def show

  end
end