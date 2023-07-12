class Api::BusinessesController < ApplicationController


  def index
    @businesses = Business.all
    render :index
  end


  def show
    @business = Business.find(params[:id])
    render :show
  end

  def search
    if params[:term]
      @businesses = Business.where('lower(name) LIKE ?', "%#{params[:term].downcase}%")
    else
      @businesses = Business.all
    end
    render :index
  end

  
end
