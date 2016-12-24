# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161220121239) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "plants", force: :cascade do |t|
    t.string   "tag_name"
    t.string   "common_name"
    t.string   "botanical_name"
    t.string   "pot_colour"
    t.string   "pot_price"
    t.string   "state_of_origin"
    t.float    "height_minimum"
    t.float    "height_maximum"
    t.float    "average_height"
    t.float    "average_width"
    t.text     "comments"
    t.string   "drainage"
    t.string   "fire"
    t.string   "e_for_endemic"
    t.string   "r_for_retainer_wall"
    t.string   "v_for_very_drought"
    t.string   "x_for_severe_exposure"
    t.string   "wet_sites_1_2_3"
    t.string   "h_for_very_wind_hardy"
    t.string   "s_for_sandy_dry_soils"
    t.string   "w_for_weeping_feature"
    t.string   "f_or_l_for_cut_flowers_or_foliage"
    t.string   "o_or_l_for_indoor_container_in_shade"
    t.string   "a_for_revegatation"
    t.string   "c_for_clumping_habit"
    t.string   "t_for_trailing_plants"
    t.string   "b_for_bird_attracting"
    t.string   "p_for_pond_plants"
    t.string   "t_for_tas_food"
    t.string   "z_for_common_name_index"
    t.string   "page_reference_number"
    t.string   "bio_cycle_waste_water_list"
    t.string   "roadside_plants_list"
    t.string   "bush_food_comments"
    t.string   "bush_food"
    t.string   "timber_maturing_time"
    t.string   "timber_comments"
    t.string   "flower_colour_and_season"
    t.string   "coastal_tolerance"
    t.string   "position"
    t.string   "soil_types"
    t.string   "frost_snow"
    t.string   "wind_resistance"
    t.string   "drought_tolerance"
    t.text     "photo"
    t.boolean  "deleted",                              default: false
    t.datetime "created_at",                                           null: false
    t.datetime "updated_at",                                           null: false
  end

  add_index "plants", ["botanical_name"], name: "index_plants_on_botanical_name", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "provider"
    t.string   "uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "role"
  end

end
