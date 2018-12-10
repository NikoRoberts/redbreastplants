# frozen_string_literal: true

class VisitorsController < ApplicationController
  before_action :find_plant_by_slug, only: [:show_plant, :plant_image]
  def about; end

  def maps; end

  def plant
    @plant = Plant.find(params[:id])
    render json: render_to_string('_plant', formats: [:html], layout: false, locals: { plant: @plant })
  end

  def show_plant
    render :plant
  end

  def plant_image
    respond_to do |format|
      format.gif { render plain: Base64.decode64(@plant.photo), content_type: 'image/gif' }
    end
  end

  def tubestock; end

  def hobart; end

  def plantlist
    @plants = Plant.visible
  end

  def contact; end

  def send_contact
    # record the contact
    ContactRecord.create(name: params[:name], email: params[:email_address], telephone: params[:telephone], message: params[:message])
    # send the email
    ContactMailer.notify_about_contact(params[:name], params[:email_address], params[:telephone], params[:message]).deliver_now
    redirect_to contact_url, notice: 'Message sent successfully'
  end

  private

  def find_plant_by_slug
    @plant = Plant.all.detect do |plant|
      plant.slug == params[:name]
    end
  end
end
