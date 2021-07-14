Rails.application.routes.draw do
  root "app#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :books
      resources :sessions, only: [:create]
      resources :registrations, only: [:create]
      delete :logout, to: "sessions#logout"
      get :logged_in, to: 'sessions#logged_in'
    end
  end

  get '*path', to: 'app#index', via: :all
end