# frozen_string_literal: true

class AddAlternativeNamesToPlant < ActiveRecord::Migration[5.2]
  def change
    add_column :plants, :alternative_names, :string, array: true
    add_index :plants, :alternative_names
  end
end
