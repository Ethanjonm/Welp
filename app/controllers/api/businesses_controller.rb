class Api::BusinessesController < ApplicationController


  def index
    @businesses = Business.all
    debugger
    render :index
  end


  def show
    @business = Business.find(params[:id])
    render :show
  end
end
