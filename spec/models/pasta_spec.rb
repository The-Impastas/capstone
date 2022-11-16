require "rails_helper"

RSpec.describe Pasta, type: :model do
    it "should have a valid name_of_pasta"do
      pasta = Pasta.create(
        protein: 'turkey',
        sauce: 'Pumpkin sauce',
        beverage: 'red sauvignon blanc',
        cheese: 'parm',
        recipe_link: 'google.com',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
      )
      pasta.validate
      expect(pasta.errors[:name_of_pasta]).to_not be_empty
    end
    it "should have a valid protein"do
      pasta = Pasta.create(
        name_of_pasta: 'Angel Hair',
        sauce: 'Pumpkin sauce',
        beverage: 'red sauvignon blanc',
        cheese: 'parm',
        recipe_link: 'google.com',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
      )
      pasta.validate
      expect(pasta.errors[:protein]).to_not be_empty
    end
    it "should have a valid sauce"do
      pasta = Pasta.create(
        name_of_pasta: 'Angel Hair',
        protein: 'turkey',
        beverage: 'red sauvignon blanc',
        cheese: 'parm',
        recipe_link: 'google.com',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
      )
      pasta.validate
      expect(pasta.errors[:sauce]).to_not be_empty
  end
    it "should have a valid beverage"do
      pasta = Pasta.create(
        name_of_pasta: 'Angel Hair',
        protein: 'turkey',
        sauce: 'Pumpkin sauce',
        cheese: 'parm',
        recipe_link: 'google.com',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
      )
      pasta.validate
      expect(pasta.errors[:beverage]).to_not be_empty
  end
    it "should have a valid cheese"do
      pasta = Pasta.create(
        name_of_pasta: 'Angel Hair',
        protein: 'turkey',
        sauce: 'Pumpkin sauce',
        beverage: 'red sauvignon blanc',
        recipe_link: 'google.com',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
      )
      pasta.validate
      expect(pasta.errors[:cheese]).to_not be_empty
  end
    it "should have a valid recipe_link"do
      pasta = Pasta.create(
        name_of_pasta: 'Angel Hair',
        protein: 'turkey',
        sauce: 'Pumpkin sauce',
        beverage: 'red sauvignon blanc',
        cheese: 'parm',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
      )
      pasta.validate
      expect(pasta.errors[:recipe_link]).to_not be_empty
  end
    it "should have a valid image"do
      pasta = Pasta.create(
        name_of_pasta: 'Angel Hair',
        protein: 'turkey',
        sauce: 'Pumpkin sauce',
        beverage: 'red sauvignon blanc',
        cheese: 'parm',
        recipe_link: 'google.com',
      )
      pasta.validate
      expect(pasta.errors[:image]).to_not be_empty
  end
    it "should have valid information"do
      pasta = Pasta.create(
        name_of_pasta: '',
        protein: 'dfdf',
        sauce: 'sdfdf',
        beverage: 'fsdf',
        cheese: 'dfdf',
        recipe_link: 'fdfdf',
      )
      pasta.validate
      expect(pasta.errors[:name_of_pasta]).to_not be_empty
  end
    it "should have valid information"do
      pasta = Pasta.create(
        name_of_pasta: '',
        protein: '',
        sauce: 'sdfdf',
        beverage: 'fsdf',
        cheese: 'dfdf',
        recipe_link: 'fdfdf',
      )
      pasta.validate
      expect(pasta.errors[:protein]).to_not be_empty
  end
    it "should have valid information"do
      pasta = Pasta.create(
        name_of_pasta: '',
        protein: '',
        sauce: '',
        beverage: 'fsdf',
        cheese: 'dfdf',
        recipe_link: 'fdfdf',
      )
      pasta.validate
      expect(pasta.errors[:protein]).to_not be_empty
  end
    it "should have valid information"do
      pasta = Pasta.create(
        name_of_pasta: '',
        protein: '',
        sauce: '',
        beverage: '',
        cheese: 'dfdf',
        recipe_link: 'fdfdf',
      )
      pasta.validate
      expect(pasta.errors[:beverage]).to_not be_empty
  end
    it "should have valid information"do
      pasta = Pasta.create(
        name_of_pasta: '',
        protein: '',
        sauce: '',
        beverage: '',
        cheese: '',
        recipe_link: 'fdfdf',
      )
      pasta.validate
      expect(pasta.errors[:cheese]).to_not be_empty
  end
    it "should have valid information"do
      pasta = Pasta.create(
        name_of_pasta: '',
        protein: '',
        sauce: '',
        beverage: '',
        cheese: '',
        recipe_link: '',
      )
      pasta.validate
      expect(pasta.errors[:recipe_link]).to_not be_empty
  end
  end