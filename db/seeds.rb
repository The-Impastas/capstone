user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password", first_name: "testing", last_name: "testing" , birthday: "1992-04-04")

pasta = [
  {
    name_of_pasta: 'Angel Hair',
    protein: 'turkey',
    sauce: 'Pumpkin sauce',
    beverage: 'red sauvignon blanc',
    cheese: 'parm',
    recipe_link: 'google.com',
    image: 'pasta.image.com' ,
  },
  {
    name_of_pasta: 'Angel Hair',
    protein: 'tofu',
    sauce: 'Pumpkin sauce',
    beverage: 'michelob ultra',
    cheese: 'american',
    recipe_link: 'google.com',
    image: 'pasta.image.2.com' 
  },
  {
    name_of_pasta: 'Angel Hair',
    protein: 'beef',
    sauce: 'red sauce',
    beverage: 'chocolate milk',
    cheese: 'asiago',
    recipe_link: 'google.com',
    image: 'pasta.image.3.com',
  }
]

pasta.each do |each_pasta|
  user.pastas.create each_pasta
  puts "creating pasta #{each_pasta}"
end