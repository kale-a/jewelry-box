class Api::V1::CategoriesController < ApiController

  def index
    render json: Categories.all
  end
  
  def show
    render json: Category.all, serializer: CategoriesSerializer, include: ['pie.user']
  end
end