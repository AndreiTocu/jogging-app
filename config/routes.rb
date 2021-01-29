Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    resources :users
    resources :trainings, only: [:create, :destroy, :update]
    get '/session', to: 'sessions#session_data'
    post '/signin', to: 'sessions#create'
    delete '/signout', to: 'sessions#destroy'
    get '/feed/:id', to: 'trainings#show'
  end

  get "*path", to: 'pages#index', via: :all
end
