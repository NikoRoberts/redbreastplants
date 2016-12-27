class VisitorsController < ApplicationController
  def about
  end
  def maps
  end
  def plantlist
    @plants = Plant.visible
  end

  def contact
  end

  def send_contact
    ContactMailer.notify_about_contact(params[:name], params[:email], params[:website], params[:message])
    redirect_to contact_url, notice: "Message sent successfully"
  end
end
