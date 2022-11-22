Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/users", to: "static_pages#index"
  get "/users/:id", to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show] do
        resources :pieces, only: [:index, :show] do
          resources :categories, only: [:index, :show]
        end
      end
    end
  end
end
