# frozen_string_literal: true

Sitemap::Generator.instance.load host: 'www.redbreastplants.com.au', protocol: 'https' do
  # Sample path:
  #   path :faq
  # The specified path must exist in your routes file (usually specified through :as).

  # Sample path with params:
  #   path :faq, :params => { :format => "html", :filter => "recent" }
  # Depending on the route, the resolved url could be http://mywebsite.com/frequent-questions.html?filter=recent.

  # Sample resource:
  #   resources :articles

  # Sample resource with custom objects:
  #   resources :articles, :objects => proc { Article.published }

  # Sample resource with search options:
  #   resources :articles, :priority => 0.8, :change_frequency => "monthly"

  # Sample resource with block options:
  #   resources :activities,
  #             :skip_index => true,
  #             :updated_at => proc { |activity| activity.published_at.strftime("%Y-%m-%d") }
  #             :params => { :subdomain => proc { |activity| activity.location } }

  path :root, priority: 1
  path :about_us, priority: 0.5, change_frequency: 'weekly'
  path :contact, priority: 0.5, change_frequency: 'weekly'
  path :plant_list, priority: 0.5, change_frequency: 'weekly'
  path :maps, priority: 0.5, change_frequency: 'weekly'
  path :hobart, priority: 0.5, change_frequency: 'weekly'
  path :tubestock, priority: 0.5, change_frequency: 'weekly'

  Plant.all.each do |plant|
    literal plant.url, priority: 0.5, change_frequency: 'weekly'
  end
end
