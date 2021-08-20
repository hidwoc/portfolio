Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :projects
  resources :skills
    
  resources :admins, only: [:show, :update]
  post "/admins/login", to: "admins#login"
  get "/admins/verify", to: "admins#verify"
end
