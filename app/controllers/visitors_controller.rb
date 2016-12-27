class VisitorsController < ApplicationController
  def about
  end
  def maps
  end

  def plant
    @plant = Plant.find(params[:id])
    render json: render_to_string("_plant", formats: [:html], layout: false, locals: { plant: @plant })
  end

  def plantlist
    @plants = Plant.visible
  end

  def contact
  end

  def send_contact
    ContactMailer.notify_about_contact(params[:name], params[:email], params[:website], params[:message]).deliver
    redirect_to contact_url, notice: "Message sent successfully"
  end
end
