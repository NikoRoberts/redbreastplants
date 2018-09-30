# frozen_string_literal: true

class VisitorsController < ApplicationController
  def about; end

  def maps; end

  def plant
    @plant = Plant.find(params[:id])
    render json: render_to_string('_plant', formats: [:html], layout: false, locals: { plant: @plant })
  end

  def show_plant
    @plant = Plant.visible.detect do |plant|
      plant.botanical_name.parameterize == params[:name]
    end
    render :plant
  end

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
end
