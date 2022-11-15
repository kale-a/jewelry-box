class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.has_many :pieces, through: :categorizations, null: false
    end
  end
end