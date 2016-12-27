Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/redbreast_admin', as: 'rails_admin'
  resources :plants
  root to: 'visitors#index'
  get '/about-us' => 'visitors#about'
  post '/send_contact' => 'visitors#send_contact'
  get '/maps' => 'visitors#maps'
  get '/plant-list' => 'visitors#plantlist'
  post '/plant-list' => 'visitors#plantlist_update'
  post '/update_plant' => 'plants#update_plant'
  post '/remove_plant' => 'plants#remove_plant'
  get '/contact' => 'visitors#contact'
  get '/auth/:provider/callback' => 'sessions#create'
  get '/signin' => 'sessions#new', :as => :signin
  get '/signout' => 'sessions#destroy', :as => :signout
  get '/auth/failure' => 'sessions#failure'
  # PHP redirects
  get 'index.php' => redirect("/")
  get 'about-us.php' => redirect("/about-us")
  get 'maps.php' => redirect("/maps")
  get 'plant-list.php' => redirect("/plant-list")
  get 'contact.php' => redirect("/contact")
end
