# #user1
u1description1 = Category.find_or_create_by( 
  material: "metal",
  color: "silver",
  size: "l",
  theme: "powerful",
  backing: "hook"
)

u1description2 = Category.find_or_create_by( 
  material: "plastic",
  color: "yellow",
  size: "s",
  theme: "quirky",
  backing: "hook"
)

u1description3 = Category.find_or_create_by( 
  material: "plastic",
  color: "orange",
  size: "m",
  theme: "halloween",
  backing: "stud"
)

u1earrings1 = Piece.find_or_create_by(
  jewelry_type: "Earrings",
  title: "Swords",
  description: "so many compliments",
  notes: "a little long",
  piece_photo: "https://jewelrybox-development.s3.amazonaws.com/swords.jpg",
  categories: [u1description1]
)
u1earrings2 = Piece.find_or_create_by(
  jewelry_type: "Earrings",
  title: "Rubber Ducks",
  description: "rubber duckies",
  notes: "small, not often worn",
  piece_photo: "https://jewelrybox-development.s3.amazonaws.com/ducks.jpg",
  categories: [u1description2]
)

u1earrings3 = Piece.find_or_create_by(
  jewelry_type: "Earrings",
  title: "Halloween Pumpkins",
  description: "childhood halloween buckets",
  notes: "the back of the pumpkin is papery",
  piece_photo: "https://jewelrybox-development.s3.amazonaws.com/pumpkin.jpg",
  categories: [u1description3]
)

user1 = User.create(
  email: "test3@test.com",
  username: "CaptainKayla",
  password: "password",
  jewelry_box_name: "Kayla's Box",
  profile_photo: "https://i.pinimg.com/564x/c3/7f/9b/c37f9b54267eabd8db8886d6cca548f0.jpg",
  pieces:[u1earrings1, u1earrings2, u1earrings3]
)

#user2
u2description1 = Category.find_or_create_by( 
  material: "metal",
  color: "rose gold",
  size: "m",
  theme: "earthy",
  backing: "hook"
)

u2description2 = Category.find_or_create_by( 
  material: "metal",
  color: "silver",
  size: "l",
  theme: "moons",
  backing: "hook"
)

u2description3 = Category.find_or_create_by( 
  material: "metal",
  color: "gold",
  size: "s",
  theme: "earthy",
  backing: "hook"
)

u2earrings1 = Piece.find_or_create_by(
  jewelry_type: "Earrings",
  title: "Leafs",
  description: "a little sparkly",
  notes: "very useful",
  piece_photo: "https://jewelrybox-development.s3.amazonaws.com/leafs.jpg",
  categories: [u2description1]
)
u2earrings2 = Piece.find_or_create_by(
  jewelry_type: "Earrings",
  title: "Sailor Moons",
  description: "moon hoops",
  notes: "a little bulky",
  piece_photo: "https://jewelrybox-development.s3.amazonaws.com/moons.jpg",
  categories: [u2description2]
)

u2earrings3 = Piece.find_or_create_by(
  jewelry_type: "Earrings",
  title: "Paua shells",
  description: "favorite shells",
  notes: "so useful",
  piece_photo: "https://jewelrybox-development.s3.amazonaws.com/paua.jpg",
  categories: [u2description3]
)

user2 = User.create(
  email: "test4@test.com",
  username: "WhiteChicken",
  password: "password1",
  jewelry_box_name: "Earthy Chix",
  profile_photo: "https://i.pinimg.com/564x/c3/7f/9b/c37f9b54267eabd8db8886d6cca548f0.jpg",
  pieces:[u2earrings1, u2earrings2, u2earrings3]
)