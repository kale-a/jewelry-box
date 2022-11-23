class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :username, :jewelry_box_name, :profile_photo

  has_many :pieces

end