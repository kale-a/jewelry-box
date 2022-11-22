class CategorySerializer < ActiveModel::Serializer
  attributes :id, :material, :color, :size, :theme, :backing

end