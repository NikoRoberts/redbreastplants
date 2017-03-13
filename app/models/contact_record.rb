# == Schema Information
#
# Table name: contact_records
#
#  id         :integer          not null, primary key
#  name       :string
#  email      :string
#  telephone  :string
#  message    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ContactRecord < ActiveRecord::Base
end
