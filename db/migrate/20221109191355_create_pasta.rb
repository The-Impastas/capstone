class CreatePasta < ActiveRecord::Migration[7.0]
  def change
    create_table :pasta do |t|
      t.string :name_of_pasta
      t.string :protein
      t.string :sauce
      t.string :beverage
      t.string :cheese
      t.string :recipe_link
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
