# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'visitors#index'
  get '/about-us' => 'visitors#about'
  post '/send_contact' => 'visitors#send_contact'
  get '/maps' => 'visitors#maps'
  get '/plant-list' => 'visitors#plantlist'
  get '/plant.json' => 'visitors#plant'
  post '/plant-list' => 'visitors#plantlist_update'
  post '/update_plant' => 'plants#update_plant'
  post '/remove_plant' => 'plants#remove_plant'
  get '/contact' => 'visitors#contact'
  get '/auth/:provider/callback' => 'sessions#create'
  get '/signin' => 'sessions#new', :as => :signin
  get '/signout' => 'sessions#destroy', :as => :signout
  get '/auth/failure' => 'sessions#failure'

  # key term landing pages
  get '/australian-native-plant-nursery-near-hobart', to: 'visitors#hobart', as: :hobart
  get '/australian-native-plant-tubestock', to: 'visitors#tubestock', as: :tubestock

  # PHP redirects
  get 'index.php' => redirect('/')
  get 'about-us.php' => redirect('/about-us')
  get 'maps.php' => redirect('/maps')
  get 'plant-list.php' => redirect('/plant-list')
  get 'contact.php' => redirect('/contact')

  # Single plant pages
  get 'plant-image/(*name)', to: 'visitors#plant_image'
  get 'australian-natives/(*name)', to: 'visitors#show_plant'
end
