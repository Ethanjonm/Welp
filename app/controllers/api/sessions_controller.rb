class Api::SessionsController < ApplicationController
  def show
    if current_user
      @user = current_user
      # render 'api/users/show'
      render json: @user
    else
      render json: { user: nil }
    end
  end

  def create
    debugger
    @user = User.find_by_credentials(params[:email], params[:password])
    debugger
    if @user
      debugger
      login!(@user)
      # render 'api/users/show'
      render json:  @user
    else
      debugger
      render json: { errors: ['The provided credentials were invalid.'] }, 
        status: :unauthorized
    end
  end

  def destroy
    logout!
    render json: { message: 'success' }
  end
end
