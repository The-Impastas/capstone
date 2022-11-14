class PastaController < ApplicationController

        def index
        pastas = Pasta.all
        end
        
        def create
        pasta = Pasta.create(pasta_params)
        if pasta.valid?
        render json: pasta
        else
        render json: pasta.errors, status: 422
        end
        end
        
        def show
          pasta = Pasta.find(params[:id])

        end

        def update
        pasta = Pasta.find(params[:id])
        pasta.update(pasta_params)
        if pasta.valid?
        render json: pasta
        else
        render json: pasta.errors, status: :unprocessable_entity
        end
        end
        
        def destroy
        pasta = Pasta.find(params[:id])
        if pasta.destroy
        render json: pasta
        else
        render json: pasta.errors
        end
        end
        
        private
        def pasta_params
        params.require(:pasta).permit(:name_of_pasta, :protein, :sauce, :beverage, :cheese, :recipe_link, :image, :user_id)
        end
        


end
