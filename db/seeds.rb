10.times do 
    Menu.create(
      name: Faker::Food.dish,
      description: Faker::Food.ingredient,
      price: Faker::Commerce.price.to_f,
    )
end
