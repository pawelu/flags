class CreateGyms < ActiveRecord::Migration
  def change
    create_table :gyms do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.string :kind
      t.boolean :approved, null: false, default: false
      t.text :description
      t.timestamp :reviewed_at

      t.timestamps null: false
    end
  end
end
