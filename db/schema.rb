# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_12_29_050000) do
  create_table "contact_records", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "telephone"
    t.string "message"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "plants", force: :cascade do |t|
    t.string "tag_name"
    t.string "common_name"
    t.string "botanical_name"
    t.string "pot_colour"
    t.string "pot_price"
    t.string "state_of_origin"
    t.float "height_minimum"
    t.float "height_maximum"
    t.float "average_height"
    t.float "average_width"
    t.text "comments"
    t.string "drainage"
    t.string "fire"
    t.string "e_for_endemic"
    t.string "r_for_retainer_wall"
    t.string "v_for_very_drought"
    t.string "x_for_severe_exposure"
    t.string "wet_sites_1_2_3"
    t.string "h_for_very_wind_hardy"
    t.string "s_for_sandy_dry_soils"
    t.string "w_for_weeping_feature"
    t.string "f_or_l_for_cut_flowers_or_foliage"
    t.string "o_or_l_for_indoor_container_in_shade"
    t.string "a_for_revegatation"
    t.string "c_for_clumping_habit"
    t.string "t_for_trailing_plants"
    t.string "b_for_bird_attracting"
    t.string "p_for_pond_plants"
    t.string "t_for_tas_food"
    t.string "z_for_common_name_index"
    t.string "page_reference_number"
    t.string "bio_cycle_waste_water_list"
    t.string "roadside_plants_list"
    t.string "bush_food_comments"
    t.string "bush_food"
    t.string "timber_maturing_time"
    t.string "timber_comments"
    t.string "flower_colour_and_season"
    t.string "coastal_tolerance"
    t.string "position"
    t.string "soil_types"
    t.string "frost_snow"
    t.string "wind_resistance"
    t.string "drought_tolerance"
    t.text "photo"
    t.boolean "deleted", default: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "alternative_names"
    t.boolean "c_for_coastal"
    t.boolean "g_for_groundcover"
    t.boolean "h_for_hardiness"
    t.boolean "d_for_dappled"
    t.boolean "t_for_tasmanian"
    t.boolean "w_for_wet_area"
    t.index ["alternative_names"], name: "index_plants_on_alternative_names"
    t.index ["botanical_name"], name: "index_plants_on_botanical_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "provider"
    t.string "uid"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "role"
  end
end
