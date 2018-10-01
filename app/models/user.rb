# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :string
#  provider   :string
#  uid        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  role       :integer
#

class User < ApplicationRecord
  enum role: %i[user vip admin]
  after_initialize :set_default_role, if: :new_record?

  def set_default_role
    self.role ||= if User.count == 0
                    :admin
                  else
                    :user
                  end
  end

  def self.create_with_omniauth(auth)
    raise 'Unknown person' unless auth['info']['email'].include?('@eventfuel.io') || auth['info']['email'].include?('redbreast.plants@gmail.com')
    create! do |user|
      user.provider = auth['provider']
      user.uid = auth['uid']
      user.name = auth['info']['name'] || '' if auth['info']
    end
  end

  def is_admin?
    role == 'admin'
  end
end
