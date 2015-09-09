class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.references :user, index: true, foreign_key: true
      t.references :office, index: true, foreign_key: true
      t.boolean :approved
      t.timestamp :reviewed_at
      t.text :description

      t.timestamps null: false
    end
  end
end
