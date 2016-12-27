# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Environment variables (ENV['...']) can be set in the file .env file.

Plant.find_or_create_by(botanical_name: "Indigo Australis")
Plant.find_or_create_by(botanical_name: "Acacia melanoxylin")
Plant.find_or_create_by(botanical_name: "Acacia superfluous")
Plant.find_or_create_by(botanical_name: "Leudendron superfluous", photo: "blabla1")
Plant.find_or_create_by(botanical_name: "Rhododendron superfluous", photo: "blabla2")
