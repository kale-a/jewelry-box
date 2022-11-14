class CreatePendants < ActiveRecord::Migration[5.2]
  def change
    create_table :pendants do |t|
      t.string :size, null: false
      t.string :material, null: false

      # t.has_many :colors
      # t.has_many :themes
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
