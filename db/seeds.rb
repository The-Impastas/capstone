user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password", first_name: "testing", last_name: "testing" , birthday: "1992-04-04")

pasta = [
  {
    name_of_pasta: 'Angel Hair',
    protein: 'turkey',
    sauce: 'Pumpkin sauce',
    beverage: 'red sauvignon blanc',
    cheese: 'parm',
    recipe_link: 'google.com',
    image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg' ,
  },
  {
    name_of_pasta: 'Angel Hair',
    protein: 'tofu',
    sauce: 'Pumpkin sauce',
    beverage: 'michelob ultra',
    cheese: 'american',
    recipe_link: 'google.com',
    image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/fettuccine-alfredo-1-500x375.jpg' 
  },
  {
    name_of_pasta: 'Angel Hair',
    protein: 'beef',
    sauce: 'red sauce',
    beverage: 'chocolate milk',
    cheese: 'asiago',
    recipe_link: 'google.com',
    image: 'https://www.savingdessert.com/wp-content/uploads/2017/06/Potato-Gnocchi-7-800x533.jpg',
  }
]

pasta.each do |each_pasta|
  user.pastas.create each_pasta
  puts "creating pasta #{each_pasta}"
end