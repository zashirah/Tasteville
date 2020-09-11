Rails.application.routes.draw do
  resources :flavors, only: :index
  resources :foods
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users, only: :create

  get '/foods/:food_id/flavors/:id', to: 'flavor#add_flavor_to_food'
end