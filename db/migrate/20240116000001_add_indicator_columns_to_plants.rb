class AddIndicatorColumnsToPlants < ActiveRecord::Migration[7.0]
  def change
    add_column :plants, :c_for_coastal, :boolean
    add_column :plants, :g_for_groundcover, :boolean
    add_column :plants, :h_for_hardiness, :boolean
    add_column :plants, :d_for_dappled, :boolean
    add_column :plants, :t_for_tasmanian, :boolean
    add_column :plants, :w_for_wet_area, :boolean
  end
end
