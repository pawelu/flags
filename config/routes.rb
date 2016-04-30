Rails.application.routes.draw do

  root 'home#index'

  devise_for :users
  devise_for :admins

  resources :gyms, only: [:create]
end
