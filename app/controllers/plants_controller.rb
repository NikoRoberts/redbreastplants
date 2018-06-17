# frozen_string_literal: true

class PlantsController < ApplicationController
  protect_from_forgery with: :exception, unless: proc { |c| c.request.format == 'application/json' }
  before_action :set_plant, :admin_access?, only: %i[show edit update destroy]
  before_action :find_bot_plant, only: %i[update_plant remove_plant]

  # GET /plants
  # GET /plants.json
  def index
    @plants = Plant.all
  end

  # GET /plants/1
  # GET /plants/1.json
  def show; end

  # GET /plants/new
  def new
    @plant = Plant.new
  end

  # GET /plants/1/edit
  def edit; end

  # POST /plants
  # POST /plants.json
  def create
    @plant = Plant.new(plant_params)

    respond_to do |format|
      if @plant.save
        format.html { redirect_to @plant, notice: 'Plant was successfully created.' }
        format.json { render :show, status: :created, location: @plant }
      else
        format.html { render :new }
        format.json { render json: @plant.errors, status: :unprocessable_entity }
      end
    end
  end

  # POST /update_plant
  # POST /update_plant.json
  def update_plant
    render_empty unless auth_key_provided?
    respond_to do |format|
      if set_attributes_from_filemaker(@plant)
        format.json { render :show, status: :created, location: @plant }
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

  # PATCH/PUT /plants/1
  # PATCH/PUT /plants/1.json
  def update
    respond_to do |format|
      if @plant.update(plant_params)
        format.html { redirect_to @plant, notice: 'Plant was successfully updated.' }
        format.json { render :show, status: :ok, location: @plant }
      else
        format.html { render :edit }
        format.json { render json: @plant.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /plants/1
  # DELETE /plants/1.json
  def destroy
    @plant.destroy
    respond_to do |format|
      format.html { redirect_to plants_url, notice: 'Plant was successfully destroyed.' }
      format.json { head :no_content }
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
    @plant = Plant.find_or_create_by(botanical_name: params[:bot_name])
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
