class Pasta < ApplicationRecord
    belongs_to :user
    validates :name_of_pasta, :protein, :sauce, :beverage, :cheese, :recipe_link, :image, presence: true
    validates_presence_of :name_of_pasta, :protein, :sauce, :beverage, :cheese, :recipe_link, :image, :message  => "Please fill out all text boxes"
    
    # validates_format_of :name_of_pasta, :with => /\A[a-z]+\z/i
end
