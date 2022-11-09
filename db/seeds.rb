pasta = [
  {
    name_of_pasta: 'Angel Hair',
    protein: 'turkey',
    sauce: 'Pumpkin sauce',
    beverage: 'red sauvignon blanc',
    cheese: 'parm',
    recipe_link: 'google.com',
    image: 'pasta.image.com' ,
    user_id: 1,
  },
  {
    name_of_pasta: 'Angel Hair',
    protein: 'tofu',
    sauce: 'Pumpkin sauce',
    beverage: 'michelob ultra',
    cheese: 'american',
    recipe_link: 'google.com',
    image: 'pasta.image.2.com' ,
    user_id: 2,
  },
  {
    name_of_pasta: 'Angel Hair',
    protein: 'beef',
    sauce: 'red sauce',
    beverage: 'chocolate milk',
    cheese: 'asiago',
    recipe_link: 'google.com',
    image: 'pasta.image.3.com' ,
    user_id: 3,
  }
]

pasta.each do |each_pasta|
  Pasta.create each_pasta
  puts "creating pasta #{each_pasta}"
end