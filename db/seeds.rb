# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Piece.destroy_all
User.destroy_all

description1 = Category.find_or_create_by( 
  material: "metal",
  color: "silver",
  size: "l",
  theme: "quirky",
  backing: "hook"
)

earrings1 = Piece.find_or_create_by(
  jewelry_type: "earrings",
  title: "swords",
  description: "so many compliments",
  notes: "a little long",
  piece_photo: "https://m.media-amazon.com/images/I/51yJ--Q8zJS._AC_UX679_.jpg",
  categories: [description1]
)

user1 = User.create(
  email: "test3@test.com",
  username: "test3",
  password: "password",
  jewelry_box_name: "testBox3",
  profile_photo: "https://i.pinimg.com/564x/c3/7f/9b/c37f9b54267eabd8db8886d6cca548f0.jpg",
  pieces:[earrings1]
)

# 1. list of Users (index)
# 2. Users index with pieces
# 3. show page for user - with user details
# 4. showing the pieces for that user on their show page
