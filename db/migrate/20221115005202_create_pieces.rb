class CreatePieces < ActiveRecord::Migration[5.2]
  def change
    create_table :pieces do |t|
      t.has_many :categories, through: :categorizations, null: false

      t.timestamps
    end
  end
end