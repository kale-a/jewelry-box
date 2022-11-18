class Piece < ApplicationRecord
  validates :jewelry_type, presence: true

  has_many :categorizations
  has_many :categories, through: :categorizations
  belongs_to :user

  mount_uploader :piece_photo, PiecePhotoUploader
end