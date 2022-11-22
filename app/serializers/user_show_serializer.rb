class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :username, :jewelry_box_name

  has_many :pieces

end