class CreateContactRecords < ActiveRecord::Migration[4.2]
  def change
    create_table :contact_records do |t|
      t.string :name
      t.string :email
      t.string :telephone
      t.string :message
      t.timestamps null: false
    end
  end
end
