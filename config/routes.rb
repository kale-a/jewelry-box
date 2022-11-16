Rails.application.routes.draw do
  root 'main#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :profiles, only: [:index, :show, :create]
    end
  end
end
