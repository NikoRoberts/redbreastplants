require 'csv'

class ImportPlantsFromCsvAgain < ActiveRecord::Migration[7.0]
  def up
    Plant.delete_all

    CSV.foreach(Rails.root.join('db/website-plant-list-detailed-polished.csv'), headers: true) do |row|
      plant = Plant.find_or_create_by(botanical_name: row['Botanical name'])

      plant.update!(
        common_name: row['Common Name'],
        coastal_tolerance: row['Coastal preference'],
        comments: row['Detailed Description'],
        drainage: row['Drainage Preferences'],
        drought_tolerance: row['Drought tolerance'],
        flower_colour_and_season: row['Flower description'],
        frost_snow: row['Frost tolerance'],
        average_height: row['Height average']&.to_f,
        position: row['Position preference'],
        soil_types: row['Soil type'],
        average_width: row['Average width']&.to_f,
        wind_resistance: row['Wind resistance'],
        c_for_coastal: row['C for coastal'].present?,
        g_for_groundcover: row['G for groundcover'].present?,
        h_for_hardiness: row['H for hardiness'].present?,
        d_for_dappled: row['D for dappled'].present?,
        t_for_tasmanian: row['T for tasmanian'].present?,
        w_for_wet_area: row['Wet area plant'].present?
      )
    end
  end

  def down
    Plant.delete_all
  end
end
