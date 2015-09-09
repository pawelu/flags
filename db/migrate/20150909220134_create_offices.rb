class CreateOffices < ActiveRecord::Migration
  def change
    create_table :offices do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.string :kind
      t.string :status
      t.text :description
      t.timestamp :last_reviewed_at

      t.timestamps null: false
    end
  end
end
