Rails.application.routes.draw do
  root "app#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :books
    end
  end

  get '*path', to: 'app#index', via: :all
end