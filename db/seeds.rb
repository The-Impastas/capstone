pasta = [
  {
    pasta: 'Angel Hair',
    protein: 'turkey',
    sauce: 'Pumpkin sauce',
    beverage: 'red sauvignon blanc',
    cheese: 'parm',
    recipe_link: 'google.com',
    image: 'pasta.image.com' ,
    user_id: 1,
  },
  {
    pasta: 'Angel Hair',
    protein: 'turkey',
    sauce: 'Pumpkin sauce',
    beverage: 'red sauvignon blanc',
    cheese: 'parm',
    recipe_link: 'google.com',
    image: 'pasta.image.com' ,
    user_id: 1,
  },
  {
    pasta: 'Angel Hair',
    protein: 'turkey',
    sauce: 'Pumpkin sauce',
    beverage: 'red sauvignon blanc',
    cheese: 'parm',
    recipe_link: 'google.com',
    image: 'pasta.image.com' ,
    user_id: 1,
  }
]

cats.each do |each_cat|
  Cat.create each_cat
  puts "creating cat #{each_cat}"
end