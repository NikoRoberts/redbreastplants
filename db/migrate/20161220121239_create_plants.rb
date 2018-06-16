class CreatePlants < ActiveRecord::Migration[4.2]
  def change
    create_table :plants do |t|
      t.string :tag_name
      t.string :common_name
      t.string :botanical_name, index: true
      t.string :pot_colour
      t.string :pot_price
      t.string :state_of_origin
      t.float :height_minimum
      t.float :height_maximum
      t.float :average_height
      t.float :average_width
      t.text :comments
      t.string :drainage
      t.string :fire
      t.string :e_for_endemic
      t.string :r_for_retainer_wall
      t.string :v_for_very_drought
      t.string :x_for_severe_exposure
      t.string :wet_sites_1_2_3
      t.string :h_for_very_wind_hardy
      t.string :s_for_sandy_dry_soils
      t.string :w_for_weeping_feature
      t.string :f_or_l_for_cut_flowers_or_foliage
      t.string :o_or_l_for_indoor_container_in_shade
      t.string :a_for_revegatation
      t.string :c_for_clumping_habit
      t.string :t_for_trailing_plants
      t.string :b_for_bird_attracting
      t.string :p_for_pond_plants
      t.string :t_for_tas_food
      t.string :z_for_common_name_index
      t.string :page_reference_number
      t.string :bio_cycle_waste_water_list
      t.string :roadside_plants_list
      t.string :bush_food_comments
      t.string :bush_food
      t.string :timber_maturing_time
      t.string :timber_comments
      t.string :flower_colour_and_season
      t.string :coastal_tolerance
      t.string :position
      t.string :soil_types
      t.string :frost_snow
      t.string :wind_resistance
      t.string :drought_tolerance
      t.text :photo
      t.boolean :deleted, default: false

      t.timestamps null: false
    end
  end
end
