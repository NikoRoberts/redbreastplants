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

FactoryGirl.define do
  factory :user do
    name 'Test User'
    email 'test@example.com'
    password 'please123'

    trait :admin do
      role 'admin'
    end
  end
end
