class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']


  def create
    @user = User.new(user_params)
    # debugger
    if @user.save
      login!(@user)
      # render :show
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end


  private

  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname, :zip_code)
  end
end
