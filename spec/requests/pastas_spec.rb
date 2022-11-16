require 'rails_helper'

RSpec.describe "Pastas", type: :request do
  let(:user) { User.create email: "test@example.com", password: "password", password_confirmation: "password", first_name: "testing", last_name: "testing", birthday: "1992-04-04" }
  describe "GET /index" do
    it "gets a list of pastas" do
      Pasta.create(
        name_of_pasta: 'Angel Hair',
        protein: 'turkey',
        sauce: 'Pumpkin sauce',
        beverage: 'red sauvignon blanc',
        cheese: 'parm',
        recipe_link: 'google.com',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
        user_id: user.id
      )

      # Make a request
      get '/pastas'

      # pasta = JSON.parse(response.body)
      pasta = Pasta.first
      p pasta
      expect(pasta["name_of_pasta"]).to eq 'Angel Hair'
      expect(pasta["protein"]).to eq 'turkey'
      expect(pasta["sauce"]).to eq 'Pumpkin sauce'
      expect(pasta["beverage"]).to eq 'red sauvignon blanc'
      expect(pasta["cheese"]).to eq 'parm'
      expect(pasta["recipe_link"]).to eq 'google.com'
      expect(pasta["image"]).to eq 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg'
      expect(response).to have_http_status(200)
      
    end
  end

# ------create-------
  describe "POST /create" do
    it "creates a pasta" do
    # The params we are going to send with the request
      pasta_params = {
        pasta:{
          name_of_pasta: 'Angel Hair',
          protein: 'turkey',
          sauce: 'Pumpkin sauce',
          beverage: 'red sauvignon blanc',
          cheese: 'parm',
          recipe_link: 'google.com',
          image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
          user_id: user.id
        }
      }
    # Send the request to the server
    post "/pasta", params: pasta_params
    pasta = Pasta.first
    expect(response).to have_http_status(200)
    expect(pasta.name_of_pasta).to eq 'Angel Hair'
    expect(pasta["protein"]).to eq 'turkey'
    expect(pasta["sauce"]).to eq 'Pumpkin sauce'
    expect(pasta["beverage"]).to eq 'red sauvignon blanc'
    expect(pasta["cheese"]).to eq 'parm'
    expect(pasta["recipe_link"]).to eq 'google.com'
    expect(pasta["image"]).to eq 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg'
   end
   #--------- Create w/o name -------------
     it "doesn't create a pasta without a name" do
       # The params we are going to send with the request
         pasta_params = {
           pasta:{
             protein: 'turkey',
             sauce: 'Pumpkin sauce',
             beverage: 'red sauvignon blanc',
             cheese: 'parm',
             recipe_link: 'google.com',
             image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
             user_id: user.id
           }
         }
         post '/pasta', params: pasta_params
         error_response = JSON.parse(response.body)
         expect(error_response["name_of_pasta"]).to include "can't be blank"
         expect(response).to have_http_status(422)
       end
       it "doesn't create a pasta without a protein" do
         # The params we are going to send with the request
           pasta_params = {
             pasta:{
               name_of_pasta: 'Angel Hair',
               sauce: 'Pumpkin sauce',
               beverage: 'red sauvignon blanc',
               cheese: 'parm',
               recipe_link: 'google.com',
               image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
               user_id: user.id
             }
           }
           post '/pasta', params: pasta_params
           error_response = JSON.parse(response.body)
           expect(error_response["protein"]).to include "can't be blank"
           expect(response).to have_http_status(422)
      end 
       it "doesn't create a pasta without a beverage" do
         # The params we are going to send with the request
           pasta_params = {
             pasta:{
               name_of_pasta: 'Angel Hair',
               protein: 'turkey',
               sauce: 'Pumpkin sauce',
               cheese: 'parm',
               recipe_link: 'google.com',
               image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
               user_id: user.id
             }
           }
           post '/pasta', params: pasta_params
           error_response = JSON.parse(response.body)
           expect(error_response["beverage"]).to include "can't be blank"
           expect(response).to have_http_status(422)
      end 
       it "doesn't create a pasta without a cheese" do
         # The params we are going to send with the request
           pasta_params = {
             pasta:{
               name_of_pasta: 'Angel Hair',
               protein: 'turkey',
               sauce: 'Pumpkin sauce',
               beverage: 'red sauvignon blanc',
               recipe_link: 'google.com',
               image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
               user_id: user.id
             }
           }
           post '/pasta', params: pasta_params
           error_response = JSON.parse(response.body)
           expect(error_response["cheese"]).to include "can't be blank"
           expect(response).to have_http_status(422)
      end 
       it "doesn't create a pasta without a recipe link" do
         # The params we are going to send with the request
           pasta_params = {
             pasta:{
               name_of_pasta: 'Angel Hair',
               protein: 'turkey',
               sauce: 'Pumpkin sauce',
               cheese: 'parm',
               beverage: 'red sauvignon blanc',
               image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
               user_id: user.id
             }
           }
           post '/pasta', params: pasta_params
           error_response = JSON.parse(response.body)
           expect(error_response["recipe_link"]).to include "can't be blank"
           expect(response).to have_http_status(422)
      end 
       it "doesn't create a pasta without an image" do
         # The params we are going to send with the request
           pasta_params = {
             pasta:{
               name_of_pasta: 'Angel Hair',
               protein: 'turkey',
               sauce: 'Pumpkin sauce',
               cheese: 'parm',
               beverage: 'red sauvignon blanc',
               recipe_link: 'google.com',
               user_id: user.id
             }
           }
           post '/pasta', params: pasta_params
           error_response = JSON.parse(response.body)
           expect(error_response["image"]).to include "can't be blank"
           expect(response).to have_http_status(422)
      end 
    end
  
# ------update-------
  describe "PATCH /update" do
    it "updates a pasta" do
    # The params we are going to send with the request
      pasta_params = {
        pasta:{
          name_of_pasta: 'Pangel Hair',
          protein: 'turkey',
          sauce: 'Pumpkin sauce',
          beverage: 'red sauvignon blanc',
          cheese: 'parm',
          recipe_link: 'google.com',
          image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
          user_id: user.id
        }
      }
    # Send the request to the server
    p pasta_params
    post "/pasta", params: pasta_params
    pasta = Pasta.first
      update_params = {
          pasta:{
            name_of_pasta: 'Angel Hair',
            protein: 'turkey',
            sauce: 'Pumpkin sauce',
            beverage: 'red sauvignon blanc',
            cheese: 'parm',
            recipe_link: 'google.com',
            image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
            user_id: user.id
          }
      }
    patch "/pasta/#{pasta.id}", params: update_params
    pasta = Pasta.first
    expect(response).to have_http_status(200)
    expect(pasta.name_of_pasta).to eq 'Angel Hair'
   end
  end
# -----------delete------------
    describe 'DELETE /destroy' do
      it "deletes a pasta recipe" do
        pasta_params = {
          pasta: {
            name_of_pasta: 'Angel Hair',
            protein: 'turkey',
            sauce: 'Pumpkin sauce',
            beverage: 'red sauvignon blanc',
            cheese: 'parm',
            recipe_link: 'google.com',
            image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
            user_id: user.id
          }
        }
        post "/pasta", params: pasta_params
        pasta = Pasta.first
        delete "/pasta/#{pasta.id}"
        expect(response).to have_http_status(200)
      end
    end
end