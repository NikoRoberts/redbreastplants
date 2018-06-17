# frozen_string_literal: true

# mailing to redbreast team from contact form
class ContactMailer < ActionMailer::Base
  default from: "redbreast.plants@eventfuel.io"
  default to: "redbreast.plants@gmail.com"

  def notify_about_contact(name, from, telephone, content)
    @name = name
    @from = from
    @telephone = telephone
    @content = content
    mail(to: "redbreast.plants@gmail.com",
         reply_to: from,
         subject: "Redbreast Contact Page - #{name} - #{from}")
  end
end
