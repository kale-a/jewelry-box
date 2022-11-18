class Category < ApplicationRecord
  validates :material, presence: true
  validates :color, presence: true
  validates :size, presence: true
  validates :theme, presence: true
  validates :backing, presence: true

  has_many :categorizations
  has_many :pieces, through: :categorizations
end