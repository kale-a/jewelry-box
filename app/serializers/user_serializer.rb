class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_photo, :jewelry_box_name, :pieces

  has_many :pieces
end