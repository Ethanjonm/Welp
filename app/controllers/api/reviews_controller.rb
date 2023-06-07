class Api::ReviewsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        @reviews = Review.all
        render :index
    end

    def show 
        @review = Review.find(params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @review.business_id = params[:business_id]

        if @review.save
            @review.business.update_rating
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end

    end

    def destroy
        @review = Review.find(params[:id])

        if @review && @review.user_id == current_user.id
            @review.destroy
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review && @review.update(review_params)
            @review.business.update_rating
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:body, :rating, :user_id, :business_id)
    end
end
