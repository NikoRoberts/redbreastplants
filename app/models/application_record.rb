# frozen_string_literal: true

# base class for all models
class ApplicationRecord < ActiveRecord::Base
  include VersionedRelationsUpdater
  self.abstract_class = true
end

