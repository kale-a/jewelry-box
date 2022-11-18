class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :material, null: false
      t.string :color, null: false
      t.string :size, null: false
      t.string :theme, null: false
      t.string :backing

      t.belongs_to :categorizations
      t.timestamps null: false
    end
  end
end