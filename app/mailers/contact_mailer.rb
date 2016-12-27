class ContactMailer < ActionMailer::Base
  default from: "redbreast.plants@eventfuel.io"
  default to: "redbreast.plants@gmail.com"

  def notify_about_contact(name, from, website, content)
    @name = name
    @from = from
    @website = website
    @content = content
    mail(to: "redbreast.plants@gmail.com", subject: "Redbreast Contact Page - #{name}")
  end
end
