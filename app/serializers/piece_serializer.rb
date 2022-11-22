class PieceSerializer < ActiveModel::Serializer
  attributes :id, :jewelry_type, :title, :description, :categories, :piece_photo, :notes

  belongs_to :user
  has_many :categories
end