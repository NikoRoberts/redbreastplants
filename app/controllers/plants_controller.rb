# frozen_string_literal: true

class PlantsController < ApplicationController
  protect_from_forgery with: :exception, unless: proc { |c| c.request.format == 'application/json' }
  before_action :set_plant, :admin_access?, only: %i[show edit update destroy]
  before_action :find_bot_plant, only: %i[update_plant remove_plant]

  # POST /update_plant
  # POST /update_plant.json
  def update_plant
    render_empty unless auth_key_provided?
    respond_to do |format|
      if set_attributes_from_filemaker(@plant)
        format.json {
          render status: :created,
                 json: {
                   id: @plant.id,
                   botanical_name: @plant.botanical_name,
                   alternative_names: @plant.alternative_names,
                   updated_at: @plant.updated_at,
                   visible: (!@plant.deleted).to_s
                 }
        }
      else
        format.json { render json: @plant.errors, status: :unprocessable_entity }
      end
    end
  end

  # POST /remove_plant.json
  def remove_plant
    render_empty unless auth_key_provided?
    respond_to do |format|
      if @plant.update(deleted: true)
        format.json { render :show, status: :created, location: @plant }
      else
        format.json { render json: @plant.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_plant
    @plant = Plant.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def plant_params
    params.fetch(:plant, {})
  end

  def render_empty
    render json: {}, status: :unprocessable_entity
  end

  def auth_key_provided?
    params[:auth] == ENV['POST_AUTH_KEY']
  end

  def admin_access?
    raise 'No access' unless current_user.is_admin?
  end

  def find_bot_plant
    names = params[:bot_name].split("\r").reject(&:blank?).map(&:strip)
    matches = Plant.where('botanical_name ILIKE :name OR :name = ANY(alternative_names)', name: names.first)
    @plant = Plant.find(matches.first&.id)
    update_bot_name(@plant, names)
  end

  def update_bot_name(plant, names)
    return if names.size < 2
    return if plant.botanical_name == names.first && plant.alternative_names == names[1..names.length]
    plant.update(
      botanical_name: names.first,
      alternative_names: names | plant.alternative_names.to_a
    )
  end

  def set_attributes_from_filemaker(plant)
    plant.update(
      tag_name: params[:tag_name],
      common_name: params[:common_name],
      pot_colour: params[:pot_colour],
      pot_price: params[:pot_price],
      state_of_origin: params[:state_of_origin],
      height_minimum: params[:min_h],
      height_maximum: params[:max_h],
      average_height: params[:avg_h],
      average_width: params[:avg_w],
      comments: params[:comments],
      drainage: params[:drainage],
      fire: params[:fire],
      e_for_endemic: params[:endemic],
      r_for_retainer_wall: params[:retainer],
      v_for_very_drought: params[:drought],
      x_for_severe_exposure: params[:severe],
      wet_sites_1_2_3: params[:wet_sites],
      h_for_very_wind_hardy: params[:hardy],
      s_for_sandy_dry_soils: params[:sandy],
      w_for_weeping_feature: params[:weeping],
      f_or_l_for_cut_flowers_or_foliage: params[:cut_flowers],
      o_or_l_for_indoor_container_in_shade: params[:indoor],
      a_for_revegatation: params[:reveg],
      c_for_clumping_habit: params[:clumping],
      t_for_trailing_plants: params[:trailing],
      b_for_bird_attracting: params[:bird],
      p_for_pond_plants: params[:pond],
      t_for_tas_food: params[:tas_food],
      z_for_common_name_index: params[:common_index],
      page_reference_number: params[:page_ref],
      bio_cycle_waste_water_list: params[:bio],
      roadside_plants_list: params[:roadside],
      bush_food_comments: params[:bush_food_comments],
      bush_food: params[:bush],
      timber_maturing_time: params[:timber],
      timber_comments: params[:timber_comments],
      flower_colour_and_season: params[:flower],
      coastal_tolerance: params[:coastal],
      position: params[:position],
      soil_types: params[:soil_types],
      frost_snow: params[:frost_snow],
      wind_resistance: params[:wind_resistance],
      drought_tolerance: params[:drought_tolerance],
      photo: Base64.strict_encode64(Base64.decode64(params[:photo])),
      deleted: false
    )
  end
end
