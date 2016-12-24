class VisitorsController < ApplicationController
  def about
  end
  def maps
  end
  def plantlist
    @plants = Plant.visible
  end

  def plantlist_update
    render text: "", status: 403 unless params["auth"] == ENV["POST_AUTH_KEY"]
    if params["update"] == "1"

    elsif params["remove"] == "1"

    end
  end

  def contact
  end
end
