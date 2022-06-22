Rails.application.routes.draw do

  resources :handshakes
  resources :conversations
  resources :invitations, only: [:create]
  resources :tasks, only: [:create, :index, :update]
  resources :users, only: :index  
  resources :messages, only: [:create, :show]
  resources :events, only: [:index, :create]
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  mount ActionCable.server => "/cable"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  get "messages/:id", to: "messages#tester"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
