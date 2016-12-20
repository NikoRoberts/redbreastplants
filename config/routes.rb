Rails.application.routes.draw do
  root to: 'visitors#index'
  get '/about-us' => 'visitors#about'
  get '/maps' => 'visitors#maps'
  get '/plant-list' => 'visitors#plantlist'
  get '/contact' => 'visitors#contact'
  get '/auth/:provider/callback' => 'sessions#create'
  get '/signin' => 'sessions#new', :as => :signin
  get '/signout' => 'sessions#destroy', :as => :signout
  get '/auth/failure' => 'sessions#failure'
end
