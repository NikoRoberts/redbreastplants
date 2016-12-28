# == Schema Information
#
# Table name: plants
#
#  id                                   :integer          not null, primary key
#  tag_name                             :string
#  common_name                          :string
#  botanical_name                       :string
#  pot_colour                           :string
#  pot_price                            :string
#  state_of_origin                      :string
#  height_minimum                       :float
#  height_maximum                       :float
#  average_height                       :float
#  average_width                        :float
#  comments                             :text
#  drainage                             :string
#  fire                                 :string
#  e_for_endemic                        :string
#  r_for_retainer_wall                  :string
#  v_for_very_drought                   :string
#  x_for_severe_exposure                :string
#  wet_sites_1_2_3                      :string
#  h_for_very_wind_hardy                :string
#  s_for_sandy_dry_soils                :string
#  w_for_weeping_feature                :string
#  f_or_l_for_cut_flowers_or_foliage    :string
#  o_or_l_for_indoor_container_in_shade :string
#  a_for_revegatation                   :string
#  c_for_clumping_habit                 :string
#  t_for_trailing_plants                :string
#  b_for_bird_attracting                :string
#  p_for_pond_plants                    :string
#  t_for_tas_food                       :string
#  z_for_common_name_index              :string
#  page_reference_number                :string
#  bio_cycle_waste_water_list           :string
#  roadside_plants_list                 :string
#  bush_food_comments                   :string
#  bush_food                            :string
#  timber_maturing_time                 :string
#  timber_comments                      :string
#  flower_colour_and_season             :string
#  coastal_tolerance                    :string
#  position                             :string
#  soil_types                           :string
#  frost_snow                           :string
#  wind_resistance                      :string
#  drought_tolerance                    :string
#  photo                                :text
#  deleted                              :boolean          default("false")
#  created_at                           :datetime         not null
#  updated_at                           :datetime         not null
#
# Indexes
#
#  index_plants_on_botanical_name  (botanical_name)
#

class Plant < ActiveRecord::Base
  validates :botanical_name, presence: true, uniqueness: true
  scope :visible, -> { where(deleted: false).order(:botanical_name) }

  def quicklist_search_string
    ql = ""
    ql += " e_for_endemic" unless e_for_endemic.blank?
    ql += " r_for_retainer_wall" unless r_for_retainer_wall.blank?
    ql += " v_for_very_drought" unless v_for_very_drought.blank?
    ql += " x_for_severe_exposure" unless x_for_severe_exposure.blank?
    ql += " x_for_severe_exposure" unless x_for_severe_exposure.blank?
    ql += " wet_sites" + wet_sites_1_2_3 unless wet_sites_1_2_3.blank?
    ql += " h_for_very_wind_hardy" unless h_for_very_wind_hardy.blank?
    ql += " s_for_sandy_dry_soils" unless s_for_sandy_dry_soils.blank?
    ql += " w_for_weeping_feature" unless w_for_weeping_feature.blank?
    ql += " flowers_foliage_" + f_or_l_for_cut_flowers_or_foliage unless f_or_l_for_cut_flowers_or_foliage.blank?
    ql += " o_or_l_for_indoor_container_in_shade" unless o_or_l_for_indoor_container_in_shade.blank?
    ql += " indoor" + o_or_l_for_indoor_container_in_shade unless o_or_l_for_indoor_container_in_shade.blank?
    ql += " a_for_revegatation" unless a_for_revegatation.blank?
    ql += " c_for_clumping_habit" unless c_for_clumping_habit.blank?
    ql += " t_for_trailing_plants" unless t_for_trailing_plants.blank?
    ql += " b_for_bird_attracting" unless b_for_bird_attracting.blank?
    ql += " p_for_pond_plants" unless p_for_pond_plants.blank?
    ql += " t_for_tas_food" unless t_for_tas_food.blank?
    ql += " z_for_common_name_index" unless z_for_common_name_index.blank?
    ql += coastal_tolerance unless coastal_tolerance.blank?
    ql += drought_tolerance unless drought_tolerance.blank?
    ql += drainage unless drainage.blank?
    ql += wind_resistance unless wind_resistance.blank?
    ql += position unless position.blank?
    ql += timber_comments unless timber_comments.blank?
    ql += frost_snow unless frost_snow.blank?
    ql += bush_food_comments unless bush_food_comments.blank?
    ql += bio_cycle_waste_water_list unless bio_cycle_waste_water_list.blank?
    ql += roadside_plants_list unless roadside_plants_list.blank?
    ql += state_of_origin unless state_of_origin.blank?
    ql.downcase.gsub(' ','')
  end
end
