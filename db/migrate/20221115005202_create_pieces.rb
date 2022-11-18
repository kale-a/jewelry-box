class CreatePieces < ActiveRecord::Migration[5.2]
  def change
    create_table :pieces do |t|
      t.string :jewelry_type, null: false
      t.string :title
      t.string :description
      t.string :notes
      t.string :piece_photo

      t.belongs_to :user
      t.timestamps null: false
    end
  end
end