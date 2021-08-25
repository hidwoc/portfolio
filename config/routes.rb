Rails.application.routes.draw do
  resources :messages
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/admins/verify", to: "admins#verify"
  resources :admins, only: [:show, :update]
  post "/admins/login", to: "admins#login"

  resources :projects
  resources :skills
    
end
