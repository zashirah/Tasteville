Rails.application.routes.draw do
  resources :flavors
  resources :foods
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users, only: :create
end