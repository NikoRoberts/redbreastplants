# frozen_string_literal: true

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
#  deleted                              :boolean          default(FALSE)
#  created_at                           :datetime         not null
#  updated_at                           :datetime         not null
#  alternative_names                    :string           is an Array
#
# Indexes
#
#  index_plants_on_alternative_names  (alternative_names)
#  index_plants_on_botanical_name     (botanical_name)
#

class Plant < ApplicationRecord
  validates :botanical_name, presence: true, uniqueness: true
  scope :visible, -> { where(deleted: false).order(:botanical_name) }

  def slug
    botanical_name.parameterize
  end

  def url
    '/australian-natives/' + slug
  end

  def quicklist_search_string
    ql = ''
    ql += ' e_for_endemic' if e_for_endemic.present?
    ql += ' r_for_retainer_wall' if r_for_retainer_wall.present?
    ql += ' v_for_very_drought' if v_for_very_drought.present?
    ql += ' x_for_severe_exposure' if x_for_severe_exposure.present?
    ql += ' x_for_severe_exposure' if x_for_severe_exposure.present?
    ql += ' wet_sites' + wet_sites_1_2_3 if wet_sites_1_2_3.present?
    ql += ' h_for_very_wind_hardy' if h_for_very_wind_hardy.present?
    ql += ' s_for_sandy_dry_soils' if s_for_sandy_dry_soils.present?
    ql += ' w_for_weeping_feature' if w_for_weeping_feature.present?
    ql += ' flowers_foliage_' + f_or_l_for_cut_flowers_or_foliage if f_or_l_for_cut_flowers_or_foliage.present?
    ql += ' o_or_l_for_indoor_container_in_shade' if o_or_l_for_indoor_container_in_shade.present?
    ql += ' indoor' + o_or_l_for_indoor_container_in_shade if o_or_l_for_indoor_container_in_shade.present?
    ql += ' a_for_revegatation' if a_for_revegatation.present?
    ql += ' c_for_clumping_habit' if c_for_clumping_habit.present?
    ql += ' t_for_trailing_plants' if t_for_trailing_plants.present?
    ql += ' b_for_bird_attracting' if b_for_bird_attracting.present?
    ql += ' p_for_pond_plants' if p_for_pond_plants.present?
    ql += ' t_for_tas_food' if t_for_tas_food.present?
    ql += ' z_for_common_name_index' if z_for_common_name_index.present?
    ql += coastal_tolerance if coastal_tolerance.present?
    ql += drought_tolerance if drought_tolerance.present?
    ql += drainage if drainage.present?
    ql += wind_resistance if wind_resistance.present?
    ql += position if position.present?
    ql += timber_comments if timber_comments.present?
    ql += frost_snow if frost_snow.present?
    ql += bush_food_comments if bush_food_comments.present?
    ql += bio_cycle_waste_water_list if bio_cycle_waste_water_list.present?
    ql += roadside_plants_list if roadside_plants_list.present?
    ql += state_of_origin if state_of_origin.present?
    ql.downcase.delete(' ')
  end
end
