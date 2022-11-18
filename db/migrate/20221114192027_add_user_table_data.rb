class AddUserTableData < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, null: false, uniqueness: true
    add_column :users, :profile_photo, :string
    add_column :users, :jewelry_box_name, :string, null: false, uniqueness: true
  end
end