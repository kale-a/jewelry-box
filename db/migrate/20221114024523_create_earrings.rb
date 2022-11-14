class CreateEarrings < ActiveRecord::Migration[5.2]
  def change
    create_table :earrings do |t|
      t.string :type, null: false
      t.string :size, null: false

      # t.has_many :materials
      # t.has_many :colors
      # t.has_many :themes
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
