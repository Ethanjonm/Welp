Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # get 'api/test', to: 'application#test'
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :businesses, only: [:index, :show, :create, :destroy] do 
      resources :reviews, only: [:index]
    end

    get 'businesses/search/:term', to: 'businesses#search'

    resources :reviews, only: [ :create, :destroy, :update, :show]
  end

  get '*path', to: "static_pages#frontend_index"
end
